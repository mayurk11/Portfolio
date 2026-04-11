import React from "react";
import { About_Me } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-5xl font-bold heading-font tracking-tight text-white"
      >
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
      </motion.h2>

      <div className="flex justify-center px-4">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl glass-panel p-8 md:p-12 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-lg text-neutral-300 font-light leading-relaxed whitespace-pre-line">
              {About_Me}
            </div>
            
            <div className="flex justify-center md:justify-end">
               <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="glass-panel p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-4xl font-bold text-cyan-400 heading-font mb-2">1+</h3>
                     <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Years Exp</p>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                     <h3 className="text-4xl font-bold text-purple-400 heading-font mb-2">10+</h3>
                     <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Projects</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
