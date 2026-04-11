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
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-extrabold tracking-tight lg:text-7xl heading-font text-white drop-shadow-md"
            >
              Mayur Dadasaheb Kale
            </motion.h1>
            <motion.span
              variants={Container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent font-medium"
            >
              Python Full Stack Developer
            </motion.span>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg font-light tracking-wide text-neutral-400 leading-relaxed whitespace-pre-line"
            >
              {Hero_Content}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:p-8">
          <div className="flex justify-center relative">
            <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <motion.img
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-[0_0_40px_rgba(168,85,247,0.4)] border-4 border-neutral-800"
                src={DP}
                alt="Mayur Kale"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
