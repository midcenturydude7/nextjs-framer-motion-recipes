"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="fixed inset-x-0 z-10 bg-gray-900 shadow-lg">
      <motion.ul
        className="flex items-center justify-center gap-3 py-10 text-gray-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
        }}
      >
        <Link href="/">
          <li className="rounded-lg bg-slate-800 px-3 py-1">Recipes:</li>
        </Link>
        <Link href="/1-step">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            <span>1-steps</span>
          </motion.li>
        </Link>
        <Link href="/2-email">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            2-email
          </motion.li>
        </Link>
        <Link href="/3-header">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            3-header
          </motion.li>
        </Link>
        <Link href="/4-carousel">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            4-carousel
          </motion.li>
        </Link>
        <Link href="/5-panel">
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            5-panel
          </motion.li>
        </Link>
        <Link href="/6-calendar">
          <motion.li
            cinitial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500"
          >
            6-calendar
          </motion.li>
        </Link>
      </motion.ul>
    </div>
  );
}
