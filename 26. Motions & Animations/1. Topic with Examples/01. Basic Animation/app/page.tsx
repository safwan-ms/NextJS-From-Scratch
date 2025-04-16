import * as motion from "motion/react-client";
const Home = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 200 }} /> */}
      {/* <motion.div className="box" animate={{ y: 100 }} /> */}
      <motion.div className="box" animate={{ x: 100, y: 100 }} />
    </div>
  );
};
export default Home;
