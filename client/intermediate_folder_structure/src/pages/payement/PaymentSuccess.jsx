import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import ApiClient from "../../shared/axios/ApiClient";
const PaymentSuccess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const sessionId = urlParams.get("session_id");
  const oid = urlParams.get("oid");
  const [order, setOrder] = useState({});
  // update order status

  const orderStatusUpdate = async () => {
    try {
      const [sessionResponse, orderResponse] = await Promise.all([
        ApiClient.get(`stripe/get-session-details?sessionId=${sessionId}`),
        ApiClient.get(`/orders?_code=${oid}`),
      ]);

      setOrder(orderResponse.data.data.orders[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    orderStatusUpdate();
  }, [sessionId]);

  return (
    <div>
      <div class="flex py-5 items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div
          class="w-full max-w-2xl p-4 bg-white shadow-2xl mx-1
         sm:p-10 sm:rounded-3xl"
        >
          <p className="text-gray-700">
            {" "}
            <span className="text-gray-700 font-semibold">
              Invoice Id:{" "}
            </span>{" "}
            {oid}
          </p>
          <div class="text-center">
            <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700">
              <svg
                class="h-12 w-12 text-[#022c55] dark:text-green-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
            </div>
            <h1 class="text-xl lg:text-4xl font-extrabold text-[#022c55] dark:text-white">
              Payment Successful!
            </h1>
            <p class="mt-4 text-md lg:text-lg text-gray-800 dark:text-gray-300">
              Thank you for your purchase.
            </p>
            <p class="mt-6 text-xl text-blue-600 dark:text-blue-400">
              Your theme details send your email
            </p>
            <div className=" mt-6 rounded-sm  text-gray-800">
              <h1
                className="text-md lg:text-2xl font-bold md:mt-0 mt-7 select-none 
                flex flex-col lg:flex-row items-center "
              >
                <span className="mr-2">
                  <FaFolder />
                </span>{" "}
                Theme Details which have you purchased.!
              </h1>

              <div className=" w-full">
                <table className=" w-full  pt-3 text-sm border mt-4 border-gray-200 rounded-sm shadow-sm">
                  <tbody>
                    <tr className="hover:bg-gray-100 bg-gray-100 transition-colors">
                      <td className="py-2 px-3 text-gray-600 font-medium border-b select-none">
                        Title
                      </td>
                      <td className="py-1 px-3 text-gray-800 capitalize font-semibold border-b">
                        {order?.theme_ref?.title}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 transition-colors">
                      <td className="py-2 capitalize px-3 text-gray-600 font-medium border-b">
                        Category
                      </td>
                      <td className="py-1 px-3 text-gray-800 capitalize font-semibold border-b">
                        {order?.theme_ref?.category}
                      </td>
                    </tr>
                    <tr className=" hover:bg-gray-200 bg-gray-100 transition-colors">
                      <td className="py-2 px-3 text-gray-600 font-medium border-b">
                        Type
                      </td>
                      <td className="py-1 px-3 capitalize text-gray-800 font-semibold border-b">
                        {order?.theme_ref?.category}
                      </td>
                    </tr>

                    <tr className=" hover:bg-gray-200 transition-colors">
                      <td className="py-1 px-3 text-gray-600 font-medium border-b">
                        Code
                      </td>
                      <td className="py-2 uppercase px-3 text-gray-800 font-semibold border-b">
                        {order?.theme_code}
                      </td>
                    </tr>

                    <tr className="bg-gray-100 hover:bg-gray-200 transition-colors">
                      <td className="py-1 px-3 text-gray-600 font-medium">
                        Price
                      </td>
                      <td className="py-1 px-3 flex flex-wrap items-center justify-between">
                        <div className="flex   items-center justify-end space-x-2">
                          <p className="mt-1 font-bold text-end ">
                            ${order?.order_price?.offer_price?.usd}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p class="mt-4 text-sm text-gray-700 dark:text-gray-400">
              If you have any questions or need further assistance, feel free to
              contact us at:
              <a
                href="mailto:contact@weepoka.com"
                class="font-medium text-indigo-600 dark:text-indigo-400 underline"
              >
                contact@weepoka.com
              </a>
            </p>
          </div>
          <div class="mt-8 text-center">
            <Link
              to="/"
              class="inline-block px-6 py-2 text-lg font-medium text-white transition-transform rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
