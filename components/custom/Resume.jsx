"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed / Remote",
    period: "2023 – Present",
  },
];

const education = [
  {
    title: "Diploma in Web Designing",
    company: "APTECH",
    period: "2022 – 2024",
  },
  {
    title: "HSC in Computer Science",
    company: "D.J. Sindh Government Science College",
    period: "2024 – 2026",
  },
  {
    title: "SSC in Computer Science",
    company: "Millenniums Education System",
    period: "2022 – 2024",
  },
];

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function Resume() {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });
  const isEducationInView = useInView(educationRef, { margin: "-100px" });

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
          RESUME
        </span>
      </div>

      {/* Professional Experience Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl mb-12">
        <TextAnimate animation="blurInUp" by="character" once>
          Professional Experience
        </TextAnimate>
      </h1>

      {/* Experience Cards */}
      <motion.div
        ref={experienceRef}
        variants={containerVariants}
        initial="hidden"
        animate={isExperienceInView ? "visible" : "hidden"}
        className="space-y-4 mb-16"
      >
        {experiences.map((item, index) => (
          <AnimatedCard key={index} index={index}>
            <div className="bg-transparent hover:bg-gradient-to-br hover:from-teal-100/10 hover:to-teal-100/1 transition-all duration-300 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-3 h-3 bg-green-500 rounded-full my-auto flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl sm:text-xl md:text-2xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg soralight">
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="text-gray-300 border mx-5 lg:mx-0 p-2 sm:p-3 rounded-full text-xs sm:text-sm md:text-base font-medium soralight whitespace-nowrap self-start sm:self-center">
                {item.period}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>

      {/* Education Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl mb-12">
        <TextAnimate animation="blurInUp" by="character" once>
          Education
        </TextAnimate>
      </h1>

      {/* Education Cards */}
      <motion.div
        ref={educationRef}
        variants={containerVariants}
        initial="hidden"
        animate={isEducationInView ? "visible" : "hidden"}
        className="space-y-4"
      >
        {education.map((item, index) => (
          <AnimatedCard key={index} index={index}>
            <div className="bg-transparent hover:bg-gradient-to-br hover:from-teal-100/10 hover:to-teal-100/1 transition-all duration-300 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-3 h-3 bg-green-500 rounded-full my-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl sm:text-xl md:text-2xl text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg soralight">
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="text-gray-300 border mx-5 lg:mx-0 p-2 sm:p-3 rounded-full text-xs sm:text-sm md:text-base font-medium soralight whitespace-nowrap self-start sm:self-center">
                {item.period}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
}
