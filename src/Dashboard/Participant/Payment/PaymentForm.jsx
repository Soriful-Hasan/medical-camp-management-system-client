import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const { id } = useParams();
  const { user } = useAuth();
  const [paymentLoading, setPaymentLoading] = useState(false);
  const navigate = useNavigate();

  const {
    data: campDetails = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["campDetails", id],
    queryFn: async () => {
      const res = await axiosSecure(`/user/camp-participant/${id}`);
      return res.data;
    },
  });

  const handleSubmit = async (event) => {
    setPaymentLoading(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    // create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amount: campDetails?.camp_fee,
      campId: campDetails._id,
    });
    const clientSecret = res.data.client_secret;
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        },
      },
    });
    if (result.error) {
      setPaymentLoading(false);
      toast.error("Payment Failed!");
      setCardError(res.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setPaymentLoading(false);
        setCardError("");
        toast.success("Payment Succeeded!");
        navigate("/dashboard/registered-camps");

        const paymentData = {
          participantId: campDetails._id,
          camp_name: campDetails.camp_name,
          payment_status: "paid",
          confirmation_status: campDetails.confirmation_status,
          camp_fee: campDetails.camp_fee,
          email: user?.email,
          amount: result.paymentIntent.amount,
          transactionId: result.paymentIntent.id,
          paymentMethod: result.paymentIntent.payment_method_types,
        };
        const historyRes = await axiosSecure.post("/payment/save-history", {
          paymentData,
        });
      }
    }
  };
  return (
    <div className="min-h-screen flex  justify-center items-center px-4 py-8">
      <div className=" dark:text-white justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" md:p-10 md:py-10   md:px-10 md:m-10 dark:text-white dark:bg-dark-primary shadow-md w-full xl:w-4xl mx-auto"
        >
          <h1 className="text-center font-semibold text-xl">Card Details</h1>
          <div className="border-b mt-4 border-gray-100 dark:border-gray-600"></div>
          <CardElement className="bg-gray-50  w-sm md:w-full  dark:bg-gray-600 dark:text-white p-10 mt-10" />
          {cardError && <p className="text-red-500 mt-4">{cardError}</p>}

          <div className="flex justify-center pb-5 m-6 md:m-0 md:pb-0">
            <button
              type="submit"
              disabled={!stripe || campDetails.payment_status === "paid"}
              className="btn text-white rounded-full w-full  md:w-md  mt-20 bg-my-primary"
            >
              {paymentLoading ? (
                <>loading..</>
              ) : (
                <> Pay ৳{campDetails?.camp_fee}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
