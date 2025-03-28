"use client";

import { useRouter } from "next/navigation";

const Page2 = () => {
  const router = useRouter();
  console.log(router);
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <h1>Welcome to page 2</h1>
      <button
        onClick={() => navigate("/")}
        className="p-3 m-3 bg-green-500 text-white rounded-3xl cursor-pointer"
      >
        Go to Back to home
      </button>
    </div>
  );
};
export default Page2;
