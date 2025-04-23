"use client";

import { useState } from "react";
import { motion } from "motion/react";

const FadeComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-gray-200 rounded"
        >
          Hello, I'm fading component
        </motion.div>
      )}
    </div>
  );
};
export default FadeComponent;
