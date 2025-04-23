import * as motion from "motion/react-client";

const SpinningAnimation = () => {
  return (
    <motion.img
      src="https://avatars.githubusercontent.com/u/85052811?v=4"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  );
};
export default SpinningAnimation;
