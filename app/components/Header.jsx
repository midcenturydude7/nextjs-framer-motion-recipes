"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="fixed inset-x-0 z-10 bg-gray-900 shadow-lg">
      <ul className="flex items-center justify-center gap-3 py-10 text-gray-300">
        <li className="rounded-lg bg-slate-800 px-3 py-1">Recipes:</li>
        <Link href="/1-step">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center hover:bg-slate-100 hover:text-slate-500">
            1-steps
          </li>
        </Link>
        <Link href="/2-email">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center">
            2-email
          </li>
        </Link>
        <Link href="/3-header">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center">
            3-header
          </li>
        </Link>
        <Link href="/4-carousel">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center">
            4-carousel
          </li>
        </Link>
        <Link href="/5-panel">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center">
            5-panel
          </li>
        </Link>
        <Link href="/6-calendar">
          <li className="min-w-24 rounded-lg bg-slate-700 px-3 py-1 text-center">
            6-calendar
          </li>
        </Link>
      </ul>
    </div>
  );
}
