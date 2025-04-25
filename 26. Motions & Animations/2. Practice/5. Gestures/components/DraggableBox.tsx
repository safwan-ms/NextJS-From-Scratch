import * as motion from "motion/react-client";
const DraggableBox = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 200 }}
      className="w-32 h-32 bg-green-500 rounded-lg shadow-lg"
    >
      DraggableBox
    </motion.div>
  );
};

export default DraggableBox;
