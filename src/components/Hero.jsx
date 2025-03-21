import React from "react";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const Hero = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center text-center px-5">
      <motion.h1
        className="text-5xl font-bold mb-4 pb-5 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Christian Dwi Nugroho
      </motion.h1>
      <motion.p
        className="text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Web Developer
        </GradientText>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#portfolio"
          className="px-6 py-3 bg-gradient-to-tr from-blue-700 to-purple-900 rounded-lg text-black font-semibold hover:from-purple-900 hover:to-blue-700"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg transition"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
