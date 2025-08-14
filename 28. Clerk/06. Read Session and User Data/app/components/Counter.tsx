"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded && !userId) {
    return null;
  }
  //   (OR)
  if (!isLoaded && !isSignedIn) {
    return null;
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button
        className="p-3 bg-green-500 text-bold text-white rounded mr-3"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="p-3 bg-red-500 text-bold text-white rounded"
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
