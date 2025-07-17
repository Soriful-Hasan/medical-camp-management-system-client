import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const { id } = useParams();
  const { user } = useAuth();

  console.log(id);
  // get payment details
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
  console.log(campDetails);
  console.log(campDetails.camp_name);
  const handleSubmit = async (event) => {
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
      console.log("[PaymentMethod]", paymentMethod);
    }

    // create payment intent
    const res = await axiosSecure.post("/create-payment-intent", {
      amount: campDetails?.camp_fee,
      campId: campDetails._id,
    });
    const clientSecret = res.data.client_secret;
    console.log(clientSecret);
    console.log(res);
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
      toast.error("Payment Failed!");
      console.log(error);
      setCardError(res.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log(result);
        setCardError("");
        toast.success("Payment Succeeded!");
        console.log();

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
        console.log(paymentData);
        const historyRes = await axiosSecure.post("/payment/save-history", {
          paymentData,
        });
      }
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col dark:text-white justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" p-10 py-10 px-10 m-10 dark:text-white bg-gray-100 dark:bg-dark-primary shadow-md w-4xl mx-auto"
        >
          <CardElement />

          <button
            type="submit"
            disabled={!stripe || campDetails.payment_status === "paid"}
            className="btn w-full mt-20 bg-my-primary"
          >
            Pay {campDetails?.camp_fee}$
          </button>
          {cardError && <p className="text-red-500 ">{cardError}</p>}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
