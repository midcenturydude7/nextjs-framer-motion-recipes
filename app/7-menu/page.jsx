"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Menu() {
  return (
    <div className="bg flex min-h-screen items-center justify-center py-40 text-gray-900">
      Menu stuff
    </div>
  );
}
