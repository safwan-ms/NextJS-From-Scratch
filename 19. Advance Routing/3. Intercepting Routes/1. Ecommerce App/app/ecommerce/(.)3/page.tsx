"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const InterceptedProductTwo = () => {
  const router = useRouter();

  const closeModal = () => router.push("/ecommerce");

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h1 className="text-3xl mb-4">Sofa</h1>

          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sofa Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $500</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductTwo;
