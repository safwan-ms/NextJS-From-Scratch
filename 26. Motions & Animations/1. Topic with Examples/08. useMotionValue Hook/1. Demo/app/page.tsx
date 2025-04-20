"use client";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const Home = () => {
  const x = useMotionValue(58);
  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("Animation started on x");
  // });
  useMotionValueEvent(x, "change", (latest) => {
    console.log("Animation change to", latest);
  });
  return (
    <motion.div
      className="box"
      style={{ x }}
      drag
      dragConstraints={{ left: 0, right: 200 }}
    />
  );
};
export default Home;
