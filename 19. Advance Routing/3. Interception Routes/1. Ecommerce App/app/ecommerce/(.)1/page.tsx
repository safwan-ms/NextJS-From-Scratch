"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
const InterceptedProductOne = () => {
  const router = useRouter();
  const closeModal = () => {
    router.push("/ecommerce");
  };
  return (
    <>
      <div
        className="fixed inset-0 flex items-center
         justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg
           text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500
            hover:text-gray-800"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h1 className="text-3xl mb-4">Macbook Pro</h1>

          <img
            src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=2070"
            alt="Macbook Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $1000</p>
        </div>
      </div>
    </>
  );
};
export default InterceptedProductOne;
