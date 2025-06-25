"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { TextAnimate } from "../magicui/text-animate";

const services = [
  {
    sequence: "01",
    title: "Responsive Web Design & Development",
    image: "one.png",
  },
  {
    sequence: "02",
    title: "Front-End Development with React & Next.js",
    image: "two.png",
  },
  {
    sequence: "03",
    title: "Full-Stack Web Applications (MERN Stack)",
    image: "three.png",
  },
  {
    sequence: "04",
    title: "API Integration & Testing (Postman / Thunder Client)",
    image: "four.png",
  },
  {
    sequence: "05",
    title: "Version Control & Collaboration (Git / GitHub)",
    image: "five.png",
  },
  {
    sequence: "06",
    title: "Website Deployment & Hosting (Vercel)",
    image: "six.png",
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

export default function Services() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { margin: "-100px" });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-12">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
          Services
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-5xl mb-16">
        <TextAnimate animation="blurInUp" by="character" once>
          From Logic to Launch
        </TextAnimate>
      </h1>

      {/* Services List */}
      <motion.div
        ref={servicesRef}
        variants={containerVariants}
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
        className="space-y-6"
      >
        {services.map((item, index) => (
          <AnimatedCard key={index} index={index}>
            <div className="group relative bg-transparent hover:bg-gradient-to-br hover:from-teal-100/10 hover:to-teal-100/1 transition-all duration-300 rounded-xl px-5 py-4 flex flex-row items-center justify-between gap-4">
              {/* Left: Sequence and Title */}
              <div className="flex flex-row items-center gap-4 flex-1">
                <div className="text-gray-400 text-sm font-semibold">
                  {item.sequence}/
                </div>

                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </div>

                {/* Hover Image (only visible on md+) */}
                <div className="hidden md:block relative w-[100px] h-[100px] mx-auto">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Right: Arrow Icon */}
              <div className="text-gray-300 border hover:text-black hover:bg-white p-3 rounded-full text-xl sm:text-2xl md:text-3xl self-start sm:self-center ml-auto">
                <a href="#message">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
}
