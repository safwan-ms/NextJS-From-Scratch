"use client";
import * as motion from "motion/react-client";

const Home = () => {
  const boxVariants = {
    initial: { scale: 1, rotate: 0, skew: 0 },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
      transition: { duration: 0.3 },
    },
    click: { scale: 0.9, rotate: -15, transition: { duration: 0.3 } },
  };
  return (
    <div>
      <motion.div
        className="h-40 w-40 bg-teal-500 rounded-lg"
        variants={boxVariants}
        initial="initial"
        whileHover="hover"
        whileTap="click"
      />
    </div>
  );
};
export default Home;
