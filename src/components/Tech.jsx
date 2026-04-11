import React from "react";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { animate, delay, motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <section className="py-20 lg:py-32">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-5xl font-bold heading-font tracking-tight text-white"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Toolkit</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          variants={IconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(253,224,71,0.4)] transition-shadow duration-300 transform hover:-translate-y-2"
        >
          <FaPython className="text-5xl text-yellow-300 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(2.5)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiPhp className="text-5xl text-blue-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(4)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <DiJavascript className="text-5xl text-yellow-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(3)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiDjango className="text-5xl text-green-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(4.5)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <FaReact className="text-5xl text-blue-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(2.8)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(134,239,172,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <FaNode className="text-5xl text-green-300 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(3.2)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiExpress className="text-5xl text-yellow-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(3.8)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(251,146,60,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiMysql className="text-5xl text-orange-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(4.2)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiPostgresql className="text-5xl text-blue-400 drop-shadow-md" />
        </motion.div>

        <motion.div variants={IconVariant(2.7)}
          initial="initial"
          animate="animate" className="glass-panel p-6 rounded-2xl cursor-pointer hover:shadow-[0_0_30px_rgba(22,163,74,0.4)] transition-shadow duration-300 transform hover:-translate-y-2">
          <SiMongodb className="text-5xl text-green-600 drop-shadow-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
