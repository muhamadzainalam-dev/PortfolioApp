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
    title: "Ai ChatBot App",
    description:
      "AI chatbot app with smart reminders and alarms, featuring a responsive chat UI, conversation handling, and production-ready architecture.",
    technologies: [
      "Node.js",
      "Next.js",
      "Express.js",
      "Firebase",
      "Socket.IO",
      "JWT",
      "Google OAuth",
      "Cloudinary",
      "Multer",
      "Node Cron",
      "Web Push",
      "Groq SDK",
      "Chrono Node",
      "React Markdown",
      "Tailwind CSS ",
      "React Toastify",
    ],
    image: "/2.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/AiChatBotApp_Fe",
    liveUrl: "https://lotaa-ai.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 2,
    title: "Car Renting App",
    description:
      "A complete car rental web application featuring listing management, booking flow, and an admin panel for operations—built to demonstrate end-to-end product development.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Redux Toolkit",
      "MUI",
      "Clerk",
      "Framer Motion",
      "Radix UI",
    ],
    image: "/8.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/CarRentingApp",
    liveUrl: "https://gentlewheel.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 3,
    title: "Video Calling App",
    description:
      "Real-time communication application using WebRTC for peer-to-peer media with signaling via backend services—built to demonstrate realtime engineering and networking concepts.",
    technologies: [
      "Node.js",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Express.js",
      "Socket.IO",
      "WebRTC",
      "React Player",
    ],
    image: "/4.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/VideoCallingApp-Fe",
    liveUrl: "https://video-calling-app-wheat.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "A modern, API-driven social media frontend built for smooth UX and scalable feature development.",
    technologies: [
      "Node.js",
      "React",
      "MongoDB",
      "Express.js",
      "JWT",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
      "Axios",
      "AWS S3",
      "Google OAuth",
      "Framer Motion",
    ],
    image: "/6.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/SocialMediaApp-Fe",
    liveUrl: "https://synk-fe.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 5,
    title: "Image Editing App",
    description:
      "A web-based image editing platform with compressor, resizer, cropper, enhancer, type converter, plus QR & barcode generator — designed for speed, usability, and optimized output for web performance.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JSZip",
      "Cheerio",
      "ytdl-core",
      "React Dropzone",
      "React Easy Crop",
      "React Qrcode",
      "React Barcode",
    ],
    image: "/10.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/ImageEditingApp-Fe",
    liveUrl: "https://freatoolshub.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 6,
    title: "Stock Management App",
    description:
      "Inventory management web app to track products, quantities, and updates with a structured dashboard experience and a scalable codebase.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Radix UI",
      "TanStack Table",
      "Recharts",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/12.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/StockManagementApp",
    liveUrl: "https://stock-management-system-lilac-zeta.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 7,
    title: "Chatting App",
    description:
      "Real-time chat app with a clean UI, smooth message flow, and socket-driven communication—built to demonstrate realtime systems and deployment readiness.",
    technologies: [
      "Next.js",
      "React",
      "Socket.IO Client",
      "Radix UI",
      "Tailwind CSS",
      "Turbopack",
      "JavaScript",
      "ESLint",
    ],
    image: "/16.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/ChattingApp-Fe",
    liveUrl: "https://freechat-mocha.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 8,
    title: "E-Commerce App",
    description:
      "E-commerce web application showcasing product browsing, cart flow, and front-end architecture built for performance and clean UX.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Axios",
    ],
    image: "/14.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/ECommerceApp",
    liveUrl: "https://shopease-peach.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 9,
    title: "Admin Dashboard",
    description:
      "Admin dashboard for managing bookings, vehicles, and customers with a clean UI, data-driven components, and a scalable front-end structure.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Next Themes",
      "Sonner",
      "React Toastify",
    ],
    image: "/20.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/AdminDashboard",
    liveUrl: "https://one-cick-drive-admin-dashboard.vercel.app",
    completedDate: "2026-03",
  },

  {
    id: 10,
    title: "Waitlist App",
    description:
      "Landing page for users to join a waitlist — built with a scalable UI component setup and form handling.",
    technologies: [
      "React",
      "Vite",
      "Recharts",
      "Tailwind CSS",
      "Next Sitemap (SEO)",
      "React Hook Form",
      "Zod",
      "React Query",
    ],
    image: "/22.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/WaitlistApp-Fe",
    liveUrl: "https://lotaai.vercel.app",
    completedDate: "2026-03",
  },
  {
    id: 11,
    title: "Landing Page App",
    description:
      "Modern landing page of a SaaS tool — built for clean UX, responsive design, and production-ready SEO.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Next Sitemap (SEO)",
      "Next Themes",
    ],
    image: "/24.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/LandingPageApp",
    liveUrl: "https://agayn.vercel.app/",
    completedDate: "2026-03",
  },
  {
    id: 12,
    title: "Portfolio",
    description:
      "Portfolio website built with Next.js to showcase projects, skills, and a clean modern UI/UX.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Motion",
      "Next Sitemap (SEO)",
      "Lucide React",
      "ESLint",
      "Turbopack",
    ],
    image: "/18.png",
    githubUrl: "https://github.com/muhamadzainalam-dev/Portfolio",
    liveUrl: "https://www.muhammudzainalam.dev",
    completedDate: "2026-03",
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
      className="w-full h-auto overflow-hidden mx-auto rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2d2f33] hover:border-[#404348] transition-all duration-500 mb-20 relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-lg group cursor-pointer"
      style={style}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      role="article"
      tabIndex={0}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image Container */}
      <div className="bg-black relative rounded-2xl overflow-hidden h-3/5 sm:h-[30rem] mb-4">
        <div className="absolute inset-0" />
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-contain rounded-2xl"
        />

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
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
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
  const [showAll, setShowAll] = useState(false);
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
          Math.abs(rect.top - stackStart) / Math.abs(stackEnd - stackStart),
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
        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
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
      {!showAll && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-green-500 to-green-800 text-white px-8 py-3 rounded-full font-semibold"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
