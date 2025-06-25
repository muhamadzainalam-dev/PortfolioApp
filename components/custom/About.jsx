"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { TypeAnimation } from "react-type-animation";

const statsData = [
  {
    id: 1,
    number: "5+",
    description: "Years In Software Development",
  },
  {
    id: 2,
    number: "5+",
    description: "Results Across Industries",
  },
  {
    id: 3,
    number: "20+",
    description: "Real-World Projects Delivered",
  },
];

// Full paragraph text that will be split into sentences
const fullDescription =
  "Passionate Software Developer with a sharp focus on back-end development, adeptly navigating the entire software development life cycle. Proficient in a versatile array of programming languages, including C++, C#, Python, Java, JavaScript and even the intricacies of Arduino. My journey in the tech world has been driven by deep curiosity, and my hands-on experience has honed my skills. Beyond coding, I bring a robust background in project management and a talent for building lasting customer relationships.";

// Split by sentences for animation
const descriptionSentences = fullDescription
  .split(". ")
  .map((sentence, index, array) =>
    index === array.length - 1 ? sentence : sentence + ". "
  );

const sentenceVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function AnimatedSentence({ children, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      variants={sentenceVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className="inline"
    >
      {children}
    </motion.span>
  );
}

function AnimatedCard({ children, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const isDescriptionInView = useInView(descriptionRef, { margin: "-100px" });
  const isStatsInView = useInView(statsRef, { margin: "-100px" });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
          About
        </span>
      </div>

      {/* Intro with Type Animation */}
      <div className="mb-8">
        <div className="relative inline-flex mb-4">
          <p className="text-white text-lg sm:text-3xl md:text-4xl mr-2">
            Hello! I'm
          </p>
          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              "Python Developer",
              1000,
              "Mern Stack Developer",
              1000,
              "Backend Developer",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            speed={50}
            className="text-green-500 text-lg sm:text-3xl md:text-4xl"
            repeat={Number.POSITIVE_INFINITY}
          />

          {/* Main Border */}
          <div className="absolute -inset-2 border-2 border-green-500"></div>

          {/* Corner Boxes - Overlaying on the border line */}
          <div className="absolute -top-3 -left-3 w-3 h-3 bg-white border-green-500 border-2 z-10"></div>
          <div className="absolute -top-3 -right-3 w-3 h-3 bg-white border-green-500 border-2 z-10"></div>
          <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-white border-green-500 border-2 z-10"></div>
          <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-white border-green-500 border-2 z-10"></div>
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
        Empowering Intelligent Systems
      </h2>

      {/* Description with Sentence-by-Sentence Animation */}
      <motion.p
        ref={descriptionRef}
        variants={containerVariants}
        initial="hidden"
        animate={isDescriptionInView ? "visible" : "hidden"}
        className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 soralight w-full"
      >
        {descriptionSentences.map((sentence, index) => (
          <AnimatedSentence key={index} index={index}>
            {sentence}
          </AnimatedSentence>
        ))}
      </motion.p>

      {/* Stats Grid */}
      <motion.div
        ref={statsRef}
        variants={statsContainerVariants}
        initial="hidden"
        animate={isStatsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {statsData.map((stat, index) => (
          <AnimatedCard key={stat.id} index={index}>
            <MagicCard
              className="h-36 border flex flex-col items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(123.51deg, rgba(215, 237, 237, 0.1) -61.8%, rgba(204, 235, 235, 0.01) 100%)",
              }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-1 text-white">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm px-2 text-center">
                {stat.description}
              </div>
            </MagicCard>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
}
