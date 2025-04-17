"use client";
// import * as motion from 'motion/react-client';
//This is the React World not Nextjs, so you have to import like this 👇
import * as react from "motion/react";

import { useState } from "react";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <react.motion.div
        variants={variants}
        initial="hidden"
        transition={{ duration: 2 }}
        animate={isVisible ? "visible" : "hidden"}
        exit="exit"
        onClick={() => setIsVisible(!isVisible)}
        className="box"
      />
    </div>
  );
};
export default Home;
