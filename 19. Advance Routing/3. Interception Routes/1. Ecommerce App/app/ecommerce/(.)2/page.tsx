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

          <h1 className="text-3xl mb-4">Football</h1>

          <img
            src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Football Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $200</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductTwo;
