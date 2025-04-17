import * as motion from "motion/react-client";
// Keyframes = [start, end, start, end.....]
const Home = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          // scale: [1, 2],
          // scale: [1, 2, 2, 4],
          // scale: [1, 2, 2, 3, 4, 3, 2, 1],
          // rotate: [0, 0, 270, 250, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 4 }}
      />
    </div>
  );
};
export default Home;
