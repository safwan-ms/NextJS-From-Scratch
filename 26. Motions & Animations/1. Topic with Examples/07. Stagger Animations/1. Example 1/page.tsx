import * as motion from "motion/react-client";

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};
const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const Home = () => {
  return (
    <motion.div
      variants={parentVariant}
      initial="hidden"
      animate="visible"
      className="flex space-x-4"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div variants={childVariant} key={index} className="box" />
      ))}
    </motion.div>
  );
};
export default Home;
