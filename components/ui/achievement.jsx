"use client";
import React from "react";
import { useRef } from "react";
import useIsVisible from "@/components/shared/isVisible";

const Achievement = ({ achievement, event }) => {
  const ref = useRef();
  const isVisible1 = useIsVisible(ref);
  return (
    <div
      ref={ref}
      className={`py-2 sm:py-8 transition-opacity ease-in duration-700 ${
        isVisible1 ? "opacity-100 " : "opacity-0"
      }`}
    >
      <div className="border-[#CCBE45] border-b-4 w-[55px] sm:w-[105px] rounded-2xl" />
      <h1 className="text-white text-md sm:text-3xl mt-1 tracking-wide">
        {achievement}
      </h1>
      <h1 className="text-[#CCBE45] text-md sm:text-3xl tracking-wide">
        {event}
      </h1>
    </div>
  );
};

export default Achievement;