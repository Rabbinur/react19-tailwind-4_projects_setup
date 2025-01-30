import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentFailed = () => {
   const location = useLocation();
   const urlParams = new URLSearchParams(location.search);

   const sessionId = urlParams.get("session_id");
   const oid = urlParams.get("oid");

   // update order status

   const orderStatusUpdate = async () => {
     try {
       const [sessionResponse] = await Promise.all([
         ApiClient.get(`stripe/get-session-details?sessionId=${sessionId}`),
         ApiClient.get(`/orders?_code=${oid}`),
       ]);

     
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   useEffect(() => {
     orderStatusUpdate();
   }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col items-center">
          <PaymentFailedIcon />
          <h2 className="mt-2 text-xl md:text-3xl font-extrabold text-gray-900 text-center">
            Payment Failed
          </h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            We're sorry, but your payment couldn't be processed. Please try
            again or contact support for assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
            <button
              // onClick={onRetry}
              className="w-full sm:w-1/2"
            >
              Try Again
            </button>
            <button
              //   onClick={onContactSupport}
              variant="outline"
              className="w-full sm:w-1/2"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

const PaymentFailedIcon = () => (
  <svg
    className="w-24 h-24 text-red-500 mb-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
