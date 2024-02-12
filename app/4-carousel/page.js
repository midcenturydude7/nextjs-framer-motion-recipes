"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

let images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

let collapsedAspectRatio = 1 / 3;
let fullAspectRatio = 3 / 2;
let margin = 12;

export default function Page() {
  let [index, setIndex] = React.useState(0);

  return (
    <MotionConfig transition={{ duration: 1.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-black pt-8">
        <div className="mx-auto flex h-5/6 max-w-7xl flex-col items-center justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image) => (
                <Image
                  key={image}
                  alt="array of nyc images"
                  src={image}
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
                x: `-${index * 100 * (collapsedAspectRatio / fullAspectRatio) + margin}%`,
              }}
              style={{ aspectRatio: fullAspectRatio }}
              className="flex justify-center"
            >
              {images.map((image, i) => (
                <motion.button
                  onClick={() => setIndex(i)}
                  initial={false}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                    },
                    inactive: {
                      aspectRatio: collapsedAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
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
