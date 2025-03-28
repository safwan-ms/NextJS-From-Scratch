"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
    // router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => navigate("login")}
        className="m-5 p-3 bg-lime-500 text-white rounded-2xl cursor-pointer text-xl"
      >
        Go to the Login Page
      </button>
      <Link
        href="/colors"
        className="m-5 p-3 bg-yellow-500 text-white rounded-2xl cursor-pointer text-xl"
      >
        Go to colors
      </Link>
    </div>
  );
};
export default Home;
