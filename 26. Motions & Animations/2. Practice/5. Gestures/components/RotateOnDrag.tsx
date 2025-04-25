"use client";
import { useState } from "react";
import { motion } from "motion/react";

const RotateOnDrag = () => {
  const [rotation, setRotation] = useState(0);
  const handleDrag = (_: any, info: any) => {
    const newRotation = rotation + info.offset.x;
    setRotation(newRotation);
  };
  return (
    <motion.div
      drag
      style={{ rotate: rotation }}
      onDrag={handleDrag}
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
    >
      Drag me!
    </motion.div>
  );
};

export default RotateOnDrag;
