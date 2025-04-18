"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { childVariants, parentVariants } from "./variants";

const galleryImages = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage((prev: boolean) => !prev);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImage ? "Hide Images" : "Show Images"}
      </button>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImage ? "visible" : "hidden"}
        className="flex"
      >
        {galleryImages.map((image, index) => (
          <motion.img
            variants={childVariants}
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="ml-[2rem] w-[300px] rounded"
          />
        ))}
      </motion.div>
    </div>
  );
};
export default Home;
