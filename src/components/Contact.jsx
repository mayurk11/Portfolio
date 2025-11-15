import React from "react";
import { CONTACT } from "../constrants";
import { delay, motion } from "framer-motion";
 
const Contact = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ DURATION: 0.8, delay: 0.5 }}
        className="my-12 text-center text-4xl  "
      >
        Contact Us
      </motion.h1>

      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACT.address}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <p className="my-4">{CONTACT.phoneNo}</p>
      </div>
    </div>
  );
};

export default Contact;
