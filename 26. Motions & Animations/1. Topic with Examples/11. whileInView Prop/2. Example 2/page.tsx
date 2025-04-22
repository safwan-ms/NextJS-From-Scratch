import * as motion from "motion/react-client";

const Home = () => {
  const boxes = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[300rem]">
      <h1 className="text-4xl font-bold mb-10">Scroll to Animate</h1>
      <div className="space-y-6">
        {boxes.map((box) => (
          <motion.div
            key={box}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-xl rounded-lg shadow-lg"
          >
            Box {box}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Home;
