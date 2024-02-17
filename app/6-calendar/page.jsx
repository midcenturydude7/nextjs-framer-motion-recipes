"use client";

import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import {
  addMonths,
  format,
  parse,
  subMonths,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
} from "date-fns";

export default function Page() {
  let [monthString, setMonthString] = React.useState(
    format(new Date(), "yyyy-MM"),
  );
  let [direction, setDirection] = React.useState();
  let month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    let next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
    setDirection(1);
  }

  function previousMonth() {
    let previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
    setDirection(-1);
  }

  let days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white">
          <div className="py-8">
            <div className="flex flex-col justify-center rounded text-center">
              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.div
                  key={monthString}
                  initial="enter"
                  animate="middle"
                  exit="exit"
                >
                  <header className="relative flex justify-between px-8">
                    <motion.button
                      variants={removeImmediately}
                      className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                      onClick={previousMonth}
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                    </motion.button>
                    <motion.p
                      variants={variants}
                      custom={direction}
                      className="absolute inset-0 flex items-center justify-center font-semibold"
                    >
                      {format(month, "MMMM yyyy")}
                    </motion.p>
                    <button
                      className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                      onClick={nextMonth}
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  </header>
                  <motion.div
                    variants={removeImmediately}
                    className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                  >
                    <span className="font-medium text-stone-500">Su</span>
                    <span className="font-medium text-stone-500">Mo</span>
                    <span className="font-medium text-stone-500">Tu</span>
                    <span className="font-medium text-stone-500">We</span>
                    <span className="font-medium text-stone-500">Th</span>
                    <span className="font-medium text-stone-500">Fr</span>
                    <span className="font-medium text-stone-500">Sa</span>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    custom={direction}
                    className="mt-6 grid grid-cols-7 gap-y-6 px-8"
                  >
                    {days.map((day) => (
                      <span
                        className={`${isSameMonth(day, month) ? "" : "text-stone-300"}`}
                        key={format(day, "yyyy-MM-dd")}
                      >
                        {format(day, "d")}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

let variants = {
  enter: (direction) => {
    return { x: `${-100 * direction}%` };
  },
  middle: { x: "0%" },
  exit: (direction) => {
    return { x: `${100 * direction}%` };
  },
};

let removeImmediately = {
  exit: { visibility: "hidden" },
};
