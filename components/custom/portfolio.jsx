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
    title: "Shopsy — E-Commerce Web App",
    status: "Completed",
    image:
      "data:image/png;base64,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",
    description:
      "A full-stack e-commerce platform featuring product filtering, cart system, Stripe payments, and an admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Prisma"],
    liveUrl: "https://shopsy.marketlify.io",
    githubUrl: "https://github.com/yourusername/shopsy",
    completedDate: "2024-01",
    category: "Web Development",
  },
  {
    id: 2,
    title: "DevLink — Developer Portfolio Generator",
    status: "In Progress",
    image:
      "data:image/jpeg;base64,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",
    description:
      "A tool that allows developers to build and deploy modern portfolios by filling out a form — hosted on Vercel.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Vercel"],
    liveUrl: "https://devlink.webgazer.dev",
    githubUrl: "https://github.com/yourusername/devlink",
    completedDate: null,
    category: "Web Development",
  },
  {
    id: 3,
    title: "EduSync — Student Course Portal",
    status: "Completed",
    image:
      "data:image/jpeg;base64,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",
    description:
      "A MERN stack application for managing student enrollments, course materials, and assignments with real-time updates.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://edusync.projectcloud.site",
    githubUrl: "https://github.com/yourusername/edusync",
    completedDate: "2023-11",
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
          className={`w-full h-full object-contain rounded-2xl transition-all duration-500 group-hover:scale-105 ${
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
          View All Projects
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </div>
  );
}
