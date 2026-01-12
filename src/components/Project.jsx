import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-12 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* GRID WRAPPER (Centered + 3 cards per row) */}
      <div className="mx-auto max-w-7xl grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            className="rounded-2xl bg-neutral-900 overflow-hidden shadow-xl transition-all"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-7">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="rounded bg-purple-600 px-4 py-2 text-sm hover:bg-purple-700"
                >
                  Read More
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-purple-500 px-4 py-2 text-sm hover:bg-purple-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div className="w-full max-w-xl rounded-xl bg-neutral-900 p-6">
            <h2 className="text-2xl font-bold">{activeProject.title}</h2>

            <p className="mt-4 text-neutral-400">{activeProject.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-800 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-purple-600 px-4 py-2 text-sm"
              >
                GitHub
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="rounded border px-4 py-2 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
