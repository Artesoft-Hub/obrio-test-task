"use client";

import { motion } from "framer-motion";

import React from "react";
import { PropsWithChildren } from "react";

const FadeAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
