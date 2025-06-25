"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TextAnimate } from "../magicui/text-animate";
import { Github, Calendar, Tag, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "HealthTrack - Fitness Tracker",
    status: "Completed",
    image: "/healthtrack.jpg",
    description:
      "A fitness tracking app that monitors workouts, diet plans, and health metrics with personalized suggestions.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Framer Motion",
      "MongoDB",
      "Prisma",
    ],
    liveUrl: "https://www.healthtracknp.com/",
    githubUrl: "https://github.com/muhamadzainalam-dev",
    completedDate: "2024-01",
    category: "Web Development",
  },
  {
    id: 2,
    title: "GreenMart - Sustainable Grocery Store",
    status: "Completed",
    image: "/greenmart.jpg",
    description:
      "An eco-friendly e-commerce platform for groceries, emphasizing local produce and minimal packaging with easy delivery options. QuickServe - Food Delivery AppView Live",
    technologies: ["React", "Firebase", "Tailwind CSS", "Vercel"],
    liveUrl:
      "https://demo.templatemonster.com/demo/236850.html?_gl=1*13orfro*_gcl_au*MjA3NzE1NjEyMS4xNzM2MTg0NTI3*_ga*MTc5MDM4NzQ5Ni4xNzM2MTg0NTIx*_ga_FTPYEGT5LY*MTczNjI0MDczMy4yLjAuMTczNjI0MDczNC41OS4wLjA.",
    githubUrl: "https://github.com/muhamadzainalam-dev",
    completedDate: null,
    category: "Web Development",
  },
  {
    id: 3,
    title: "Portfolio",
    status: "Completed",
    image: "/portfolio.jpg",
    description:
      "A personal portfolio website showcasing my projects, skills, certifications, and experience as a full-stack developer. Designed with a sleek UI and smooth animations for an engaging user experience.",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Node.js"],
    liveUrl: "https://muhammudzainalam.vercel.app/",
    githubUrl: "https://github.com/muhamadzainalam-dev",
    completedDate: "2025-05",
    category: "Frontend",
  },
  {
    id: 4,
    title: "QuickServe - Food Delivery App",
    status: "Completed",
    image: "/quickserve.jpg",
    description:
      "A fast and reliable food delivery app with real-time tracking, restaurant recommendations, and user-friendly payment options.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://www.quickserve.live/",
    githubUrl: "https://github.com/muhamadzainalam-dev",
    completedDate: "2024-11",
    category: "Full Stack",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

function AnimatedProjectCard({ children, index, projectId }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

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

function ProjectCard({ project, style, onHover, isHovered }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-black";
      case "In Progress":
        return "bg-blue-500 text-white";
      case "To Be Edited":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className="w-full h-[32rem] sm:h-[34rem] overflow-hidden mx-auto rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2d2f33] hover:border-[#404348] transition-all duration-500 mb-20 relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-lg group cursor-pointer"
      style={style}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      role="article"
      tabIndex={0}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image Container */}
      <div className="relative rounded-2xl overflow-hidden h-3/5 sm:h-2/3 mb-4">
        <div
          className={`absolute inset-0 bg-gray-800 animate-pulse transition-opacity duration-300 ${
            imageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} preview`}
          className={`w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Status Badge */}
        <Badge
          className={`absolute left-4 bottom-4 px-3 py-1 text-xs font-semibold shadow-lg ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </Badge>

        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="absolute right-4 top-4 px-3 py-1 text-xs font-medium bg-black/50 text-white border-white/20"
        >
          <Tag className="w-3 h-3 mr-1" />
          {project.category}
        </Badge>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center gap-3"
            >
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, "_blank");
                  }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, "_blank");
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
        </div>

        <p className="text-gray-300 text-sm sm:text-base line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge
              variant="secondary"
              className="text-xs bg-white/10 text-gray-400 border-white/20"
            >
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* Date */}
        {project.completedDate && (
          <div className="flex items-center text-xs my-5 text-gray-400">
            <Calendar className="w-3 h-3 mr-1" />
            Completed {project.completedDate}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [cardTransforms, setCardTransforms] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef({});
  const containerRef = useRef(null);
  const portfolioRef = useRef(null);
  const isPortfolioInView = useInView(portfolioRef, { margin: "-200px" });

  const updateCardTransforms = useCallback(() => {
    const newTransforms = {};
    projects.forEach((project, index) => {
      const cardElement = cardRefs.current[project.id];
      if (!cardElement) return;

      const rect = cardElement.getBoundingClientRect();
      const stackStart = 0;
      const stackEnd = -rect.height * 0.8;

      let progress = 0;
      if (rect.top <= stackStart) {
        progress = Math.min(
          1,
          Math.abs(rect.top - stackStart) / Math.abs(stackEnd - stackStart)
        );
      }

      if (progress > 0) {
        const scale = Math.max(0.88, 1 - progress * 0.12);
        const translateY = -progress * 40 - index * 15;
        const zIndex = 10 + projects.length - index;
        const opacity = Math.max(0.7, 1 - progress * 0.3);

        newTransforms[project.id] = {
          scale,
          translateY,
          zIndex,
          opacity,
        };
      } else {
        newTransforms[project.id] = {
          scale: 1,
          translateY: 0,
          zIndex: 1,
          opacity: 1,
        };
      }
    });

    setCardTransforms(newTransforms);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateCardTransforms);
    };

    updateCardTransforms();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateCardTransforms]);

  const getCardStyle = (projectId) => {
    const transform = cardTransforms[projectId];
    if (!transform) {
      return {
        transform: "translateY(0px) scale(1)",
        zIndex: 1,
        opacity: 1,
      };
    }

    return {
      transform: `translateY(${transform.translateY}px) scale(${transform.scale})`,
      zIndex: transform.zIndex,
      opacity: transform.opacity,
      transformOrigin: "center top",
    };
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Portfolio Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
          Portfolio
        </span>
      </div>

      {/* Featured Projects Title */}
      <h1 className="text-2xl sm:text-5xl md:text-6xl mb-16">
        <TextAnimate animation="blurInUp" by="character" once>
          Featured Projects
        </TextAnimate>
      </h1>

      {/* Project Cards */}
      <motion.div
        ref={portfolioRef}
        variants={containerVariants}
        initial="hidden"
        animate={isPortfolioInView ? "visible" : "hidden"}
        className="relative"
      >
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={project.id}
            index={index}
            projectId={project.id}
          >
            <div
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
            >
              <ProjectCard
                project={project}
                style={getCardStyle(project.id)}
                onHover={setHoveredCard}
                isHovered={hoveredCard === project.id}
              />
            </div>
          </AnimatedProjectCard>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-800 hover:from-green-900 hover:to-green-1000 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <a href="https://github.com/muhamadzainalam-dev" target="_blank">
            View All Projects
          </a>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  );
}
