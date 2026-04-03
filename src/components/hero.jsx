import React from "react";
import { Hero_Content } from "../constants";
import DP from "../assets/DP.jpg";
import { delay, motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-0 lg:mg-35"></div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Mayur Dadasaheb Kale
            </motion.h1>
            <motion.span variants={Container(0.6)}
            initial="hidden"
            animate="visible" className="bg-grading-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent-200"> 
              Python Full Stack Developer | Python Developer
            </motion.span>
            <motion.p variants={Container(1  )}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6 font-light tracking">
              
              {Hero_Content}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-12 ">
          <div className="flex justify-center ">
            <motion.img whileInView={{opacity:1 , x:0}} initial = {{opacity: 0 , x:-100}}
            transition={{duration:0.8 , delay:0.5}}
              className=" rounded-full size-1/2 mb-4 mt-8 justify-item-center"
              src={DP}
              alt="DP"
            ></motion.img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
