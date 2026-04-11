import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center text-5xl font-bold heading-font tracking-tight text-white"
      >
        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
        {/* Email Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-[350px] glass-panel p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 heading-font">Email Me</h3>
          <a href={`mailto:${CONTACT.email}`} className="text-neutral-400 hover:text-purple-400 transition-colors">
            {CONTACT.email}
          </a>
        </motion.div>

        {/* Location Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[350px] glass-panel p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 heading-font">Location</h3>
          <p className="text-neutral-400">{CONTACT.address}</p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full md:w-[350px] glass-panel p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 heading-font">Call Me</h3>
          <p className="text-neutral-400">{CONTACT.phoneNo}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
