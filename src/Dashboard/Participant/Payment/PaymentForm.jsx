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
    data: participantDetails = {},
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
      amount: participantDetails?.camp_fee,
      campId: participantDetails._id,
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
          participantId: participantDetails._id,
          email: user?.email,
          amount: result.paymentIntent.amount,
          transactionId: result.paymentIntent.id,
          paymentMethod: result.paymentIntent.payment_method_types,
        };
        console.log(paymentData);
        const historyRes = await axiosSecure.post("/payment/history", {
          paymentData,
        });
        console.log(historyRes);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" p-10 py-10 px-10 m-10 bg-gray-100 shadow-md w-4xl mx-auto"
    >
      <CardElement />

      <button
        type="submit"
        disabled={!stripe || participantDetails.payment_status === "paid"}
        className="btn w-full mt-20"
      >
        Pay {participantDetails?.camp_fee}$
      </button>
      {cardError && <p className="text-red-500 ">{cardError}</p>}
    </form>
  );
};

export default PaymentForm;
