"use client";
import React from "react";
import Hero from "@/components/about/Hero";
import { useRef, useState, useEffect } from "react";
import OurMission from "@/components/about/OurMission";
import Modus from "@/components/about/Modus";
import Contact from "../contact/page";
import { motion } from 'framer-motion'
import ScrollDownButton from "@/components/shared/ScrollDown";

const About = () => {
  const scrollRef = useRef(null);
  const baseText = "ABOUT";

  return (
    <div className="overflow-hidden">
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            {baseText.split("").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: {
                    opacity: 0,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.02,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <ScrollDownButton targetRef={scrollRef} />
        </div>
      </div>
      <div ref={scrollRef}>
        <Hero />
        {/* Our mission */}
        <OurMission />
        {/* Modus Operandi */}
        <Modus />
        {/* Contact Us */}
        <Contact />
      </div>
    </div>
  );
};

export default About;