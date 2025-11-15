import React from "react";
import { About_Me } from "../constrants";
import { motion } from "framer-motion";

const Container1 = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const About = () => {
  return (
    <div className="border-b  border-neutra l-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ DURATION: 0.8, delay: 0.5 }}
        className="my-12 text-center text-4xl  "
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          variants={Container1(1)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-full lg:p-8"
        >
          <div className="flex items-center justify-center">
            <p className="">{About_Me}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
