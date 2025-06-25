"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "../magicui/text-animate";

const testimonials = [
  {
    id: 1,
    quote:
      "Zain's grasp on full-stack web development is beyond his years. His ability to build polished, scalable apps with React and Node is truly impressive.",
    company: "Pixelate Digital Solutions",
    role: "Areeb Khan, Senior Developer",
  },
  {
    id: 2,
    quote:
      "Zain brought both technical skill and creativity to our front-end projects. His UI precision and clean code helped us deliver fast, responsive apps.",
    company: "Freelance Collaboration",
    role: "Amina Sheikh, Front-End Engineer",
  },
  {
    id: 3,
    quote:
      "I was amazed by Zain's dedication and speed. He built a fully functional MERN app with modern features, exceeding expectations.",
    company: "Hackathon Team",
    role: "Hashir Rauf, Full-Stack Developer",
  },
  {
    id: 4,
    quote:
      "Zain thinks like a designer and codes like an engineer. His UI/UX instincts and coding consistency make him a powerful asset to any dev team.",
    company: "Design Integration Project",
    role: "Mehak Tariq, UI/UX Specialist",
  },
  {
    id: 5,
    quote:
      "Always proactive, always learning — Zain impressed us with his ability to debug complex issues and optimize backend performance.",
    company: "Node.js Project",
    role: "Osama Bashir, Backend Engineer",
  },
  {
    id: 6,
    quote:
      "Zain’s collaborative spirit and quick adaptability made remote teamwork seamless. He delivers on time with solid, production-ready code.",
    company: "Remote Dev Team",
    role: "Iqra Naveed, Project Coordinator",
  },
  {
    id: 7,
    quote:
      "Zain’s attention to detail in responsive design is outstanding. He ensures every pixel looks and feels right, no matter the screen.",
    company: "UI Polish Taskforce",
    role: "Anaya Noor, Product Designer",
  },
  {
    id: 8,
    quote:
      "A solid full-stack developer with a passion for learning. Zain picks up new tools fast and builds solutions that actually solve real problems.",
    company: "DevLab Bootcamp",
    role: "Taha Imran, Technical Mentor",
  },
  {
    id: 9,
    quote:
      "Zain’s growth mindset and consistency make him a future tech leader. He’s a rare combination of discipline, creativity, and skill.",
    company: "Mentorship Program",
    role: "Sana Farooq, Senior Software Engineer",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-green-500 text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
        </div>
        <h1 className="text-2xl sm:text-5xl md:text-6xl leading-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            Trusted By Clients
          </TextAnimate>
        </h1>
      </div>

      {/* Card */}
      <div
        className="relative border rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(123.51deg, rgba(215, 237, 237, 0.1) -61.8%, rgba(204, 235, 235, 0.01) 100%)",
        }}
      >
        <div
          className={`transition-all duration-400 ease-out ${
            isAnimating
              ? "transform scale-95 opacity-0 blur-sm"
              : "transform scale-100 opacity-100 blur-0"
          }`}
        >
          <Quote
            className={`w-10 h-10 text-gray-400 mb-4 transition-all duration-400 ${
              isAnimating
                ? "transform rotate-12 scale-90"
                : "transform rotate-0 scale-100"
            }`}
          />

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed mb-6">
            {current.quote}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                {current.company}
              </h3>
              <p className="mt-1 text-green-500 text-[0.8em] sm:text-[1em] md:text-[1em] lg:text-[1em] font-medium uppercase tracking-wide">
                {current.role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gray-700 text-white border-0 transition-all duration-200 hover:scale-110 hover:rotate-3 disabled:opacity-50 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 text-black border-0 transition-all duration-200 hover:scale-110 hover:-rotate-3 disabled:opacity-50 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
