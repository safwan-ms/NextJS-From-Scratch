import * as motion from "motion/react-client";

const Box = () => {
  return (
    <motion.div
      className="bg-blue-500 h-20 w-20 "
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
};
export default Box;
