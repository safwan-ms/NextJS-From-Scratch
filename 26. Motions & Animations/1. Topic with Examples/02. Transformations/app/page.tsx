import * as motion from "motion/react-client";
const Home = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 100 }} /> */}
      {/* <motion.div className="box" animate={{ y: 100 }} /> */}

      {/* <motion.div className="box" animate={{ rotateX: 60 }} /> */}
      {/* <motion.div className="box" animate={{ rotateY: 80 }} /> */}

      {/* <motion.div className="box" animate={{ rotate: 60 }} /> */}

      {/* <motion.div className="box" animate={{ scaleX: 2 }} /> */}
      {/* <motion.div className="box" animate={{ scaleY: 2 }} /> */}

      {/* <motion.div className="box" animate={{ skewX: 20 }} /> */}
      {/* <motion.div className="box" animate={{ skewY: 50 }} /> */}

      <motion.div className="box" animate={{ skew: 30 }} />
    </div>
  );
};
export default Home;
