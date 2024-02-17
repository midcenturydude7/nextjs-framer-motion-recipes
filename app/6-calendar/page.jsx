"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { addMonths, format, parse, subMonths } from "date-fns";

export default function Page() {
  let [monthString, setMonthString] = React.useState(
    format(new Date(), "yyyy-MM"),
  );
  let month = parse(monthString, "yyyy-MM", new Date());

  function nextMonth() {
    let next = addMonths(month, 1);

    setMonthString(format(next, "yyyy-MM"));
  }

  function previousMonth() {
    let previous = subMonths(month, 1);

    setMonthString(format(previous, "yyyy-MM"));
  }

  return (
    <div className="flex min-h-screen items-start bg-stone-800 pt-16 text-stone-900">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="py-8">
          <div className="flex flex-col justify-center rounded text-center">
            <header className="relative flex justify-between px-8">
              <button
                className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                onClick={previousMonth}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <p className="absolute inset-0 flex items-center justify-center font-semibold">
                {format(month, "MMMM yyyy")}
              </p>
              <button
                className="z-10 rounded-full p-1.5 hover:bg-stone-100"
                onClick={nextMonth}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </header>
            <div className="grid grid-cols-7">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
