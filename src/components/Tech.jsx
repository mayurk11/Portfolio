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
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="my-12 text-center text-4xl  "
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center space-x-4">
        <motion.div
          variants={IconVariant(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4  border-neutral-800 p-4 "
        >
          <FaPython className="text-4xl text-yellow-300" />
        </motion.div>

        <motion.div variants={IconVariant(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiPhp className="text-4xl text-blue-400" />
        </motion.div>

        <motion.div variants={IconVariant(9)}
          initial="initial"
          animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiJavascript className="text-4xl text-yellow-400" />
        </motion.div>

        <motion.div variants={IconVariant(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiDjango className="text-4xl text-green-400" />
        </motion.div>

        <motion.div variants={IconVariant(9)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaReact className="text-4xl text-blue-400" />
        </motion.div>

        <motion.div variants={IconVariant(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNode className="text-4xl text-green-300" />
        </motion.div>

        <motion.div variants={IconVariant(9)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiExpress className="text-4xl text-yellow-400" />
        </motion.div>

        <motion.div variants={IconVariant(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMysql className="text-4xl text-orange-400" />
        </motion.div>

        <motion.div variants={IconVariant(9)}
          initial="initial"
          animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiPostgresql className="text-4xl text-blue-400" />
        </motion.div>

        <motion.div variants={IconVariant(6)}
          initial="initial"
          animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMongodb className="text-4xl text-green-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
