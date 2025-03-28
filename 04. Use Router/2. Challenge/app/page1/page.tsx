"use client";
import { useRouter } from "next/navigation";

const Page1 = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <h1>Welcome to page 1</h1>
      <button
        onClick={() => navigate("page2")}
        className="p-3 m-3 bg-red-500 text-white rounded-3xl cursor-pointer"
      >
        Go to Page 2
      </button>
    </div>
  );
};
export default Page1;
