"use client";
import { useState } from "react";
import { motion } from "motion/react";

const menuVariant = {
  closed: { x: "-100%" },
  open: { x: 0 },
};
const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-500 text-white"
      >
        Toggle Menu
      </button>
      <motion.div
        variants={menuVariant}
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 w-64 h-full bg-blue-600"
      >
        <ul className="p-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlidingMenu;
