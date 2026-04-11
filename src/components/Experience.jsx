import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20 relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-5xl font-bold heading-font tracking-tight text-white"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experience</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4">
        {EXPERIENCE.map((experience, index) => {
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="flex flex-col lg:flex-row gap-8 mb-12 relative"
            >
              {/* Timeline dot and line */}
              <div className="hidden lg:flex flex-col items-center mr-8">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10"></div>
                {index !== EXPERIENCE.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent flex-grow mt-2"></div>
                )}
              </div>

              {/* Year */}
              <div className="lg:w-1/4 pt-1">
                <span className="text-sm font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-500/30">
                  {experience.year}
                </span>
              </div>

              {/* Content Card */}
              <div className="lg:w-3/4 glass-panel p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300">
                <h3 className="mb-2 text-2xl font-bold text-white heading-font">
                  {experience.role}
                </h3>
                <h4 className="mb-6 text-lg text-purple-300 font-medium tracking-wide">
                  {experience.company}
                </h4>
                <p className="mb-6 text-neutral-400 font-light leading-relaxed">
                  {experience.discription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm font-medium text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
