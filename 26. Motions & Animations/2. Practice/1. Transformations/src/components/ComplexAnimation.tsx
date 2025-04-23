import * as motion from "motion/react-client";

const ComplexAnimation = () => {
  return (
    <motion.div
      className="bg-purple-500 w-20 h-20"
      animate={{ x: [0, -200, 0], rotate: 360 }}
      transition={{ duration: 2, ease: "easeIn", repeat: Infinity }}
    />
  );
};
export default ComplexAnimation;
