"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <h1>Welcome to Home</h1>
      <button
        onClick={() => navigate("page1")}
        className="p-3 m-3 bg-green-500 text-white rounded-3xl cursor-pointer"
      >
        Go to Page 1
      </button>
    </div>
  );
};
export default Home;
