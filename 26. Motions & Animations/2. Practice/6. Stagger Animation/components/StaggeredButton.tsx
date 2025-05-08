import React from "react";

import * as motion from "motion/react-client";

const StaggeredButton = () => {
  const button = ["Button 1", "Button 2", "Button 3", "Button 4"];
  return (
    <motion.div whileHover={{ transition: { staggerChildren: 0.2 } }}>
      {button.map((label, index) => (
        <motion.button
          key={index}
          className="p-2 m-2 bg-blue-500 text-white rounded"
          whileHover={{ scale: 1.1 }}
        >
          {" "}
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default StaggeredButton;
