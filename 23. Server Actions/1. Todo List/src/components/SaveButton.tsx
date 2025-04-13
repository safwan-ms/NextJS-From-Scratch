"use client";

import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        className="bg-pink-500 cursor-pointer text-white py-1.5 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
        type="submit"
      >
        {pending ? "Saving..." : "Save"}
      </button>
    </div>
  );
};
export default SaveButton;
