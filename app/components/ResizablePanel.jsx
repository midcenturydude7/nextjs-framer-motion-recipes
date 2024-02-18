"use client";
import React from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ResizablePanel({ children }) {
  let [ref, bounds] = useMeasure();

  return (
    <motion.div animate={{ height: bounds.height > 0 ? bounds.height : null }}>
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}
