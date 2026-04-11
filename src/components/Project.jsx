import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-5xl font-bold heading-font tracking-tight text-white"
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
      </motion.h2>

      {/* GRID WRAPPER (Centered + 3 cards per row) */}
      <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl glass-panel overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-shadow duration-300 flex flex-col h-full"
          >
            {/* Image Wrapper */}
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 heading-font">{project.title}</h3>
              <p className="text-neutral-400 text-sm mb-6 flex-grow">{project.shortDesc || project.description.substring(0, 80) + '...'}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-cyan-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg text-white"
                >
                  Details
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-xl glass-panel hover:bg-white/10 px-4 py-2.5 text-sm font-semibold transition-all duration-300 text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-2xl rounded-3xl glass-panel p-8 md:p-10 border border-white/10 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl font-bold mb-4 heading-font text-white">{activeProject.title}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6"></div>

              <p className="text-neutral-300 leading-relaxed mb-8 text-lg font-light">
                {activeProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-3 font-semibold">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-purple-900/30 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl flex-1 text-center bg-white text-black px-6 py-3 font-bold hover:bg-neutral-200 transition-colors"
                >
                  View Repository
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
