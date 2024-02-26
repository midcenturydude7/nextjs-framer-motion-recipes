"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import useKeypress from "react-use-keypress";

let images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/1.jpeg?1",
  "/images/2.jpeg?1",
  "/images/3.jpeg?1",
  "/images/4.jpeg?1",
  "/images/5.jpeg?1",
  "/images/6.jpeg?1",
];

let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let margin = 12;
let gap = 3.25;

export default function Carousel() {
  let [index, setIndex] = React.useState(0);

  useKeypress("ArrowRight", () => {
    if (index < images.length - 1) setIndex(index + 1);
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) setIndex(index - 1);
  });

  return (
    <MotionConfig transition={{ duration: 1.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-black pt-8">
        <div className="mx-auto flex h-5/6 max-w-7xl flex-col items-center justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image, i) => (
                <motion.img
                  key={image}
                  alt="array of nyc images"
                  src={image}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  width={1280}
                  height={300}
                  className="aspect-[3/2] object-cover"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="bg-white/ absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-0 bottom-6 flex h-14 justify-center overflow-hidden">
            <motion.div
              initial={false}
              animate={{
                x: `-${index * 100 * (collapsedAspectRatio / fullAspectRatio) + margin + index * gap}%`,
              }}
              style={{ aspectRatio: fullAspectRatio, gap: `${gap}%` }}
              className="flex justify-center"
            >
              {images.map((image, i) => (
                <motion.button
                  onClick={() => setIndex(i)}
                  initial={false}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collapsedAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.5,
                    },
                  }}
                  className="shrink-0"
                  key={image}
                >
                  <Image
                    alt="array of nyc images"
                    src={image}
                    width={1280}
                    height={300}
                    className="h-full object-cover"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
