"use client"

import React from "react";
import { Heading } from "./Heading";
import { motion } from "framer-motion";

export const TechStack = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB',
    'Python', 'Numpy', 'Pandas', 'Matplotlib', 'MySQL', 'Tailwind CSS', 'Framer Motion', 'Git', 'GitHub'
  ];
  return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <span className="text-4xl">🛠️</span>
        <Heading className="text-2xl md:text-3xl font-semibold mb-6">Skills</Heading>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span
              key={skill}
              className="bg-light text-text-primary border border-border-primary 
              px-4 py-2 rounded-full shadow-md text-sm font-medium transition-colors 
              duration-200 hover:bg-primary hover:text-light"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>
  );
};