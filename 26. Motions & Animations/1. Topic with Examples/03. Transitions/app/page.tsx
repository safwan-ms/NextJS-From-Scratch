import * as motion from "motion/react-client";

const Home = () => {
  // Duration  👉  How long the animation takes.
  // Easing  👉  The speed curve of the animation.
  // Delay  👉  How long to wait before starting the animation.
  return (
    <div>
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        // transition={{ delay: 2 }}
        // transition={{ duration: 4 }}
        // transition={{ duration: 2, ease: "easeIn" }}
        // transition={{ duration: 2, ease: "easeOut" }}
        // transition={{ duration: 2, ease: "easeInOut" }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </div>
  );
};
export default Home;
