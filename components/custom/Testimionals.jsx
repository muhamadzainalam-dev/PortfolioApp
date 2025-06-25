"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "../magicui/text-animate";

const testimonials = [
  {
    id: 1,
    quote:
      "Shahmir is an exceptional MERN stack developer. His problem-solving skills, work ethic, and ability to deliver high-quality work make him an invaluable asset.",
    company: "Flexify Fusions",
    role: "Asad Ali, Co-Founder & COO",
  },
  {
    id: 2,
    quote:
      "A huge plus for our projects. Shahmir’s front-end and back-end mix, along with his tech trend awareness, really helped our team succeed.",
    company: "Freelance Project",
    role: "Tahoor Ahmed, Full Stack Developer",
  },
  {
    id: 3,
    quote:
      "Proactive and solution-driven, Shahmir's seamless integration of front-end and back-end skills played a key role in project success.",
    company: "Coursera Certified Team",
    role: "Izaan Khan, Technical Project Manager",
  },
  {
    id: 4,
    quote:
      "Shahmir is a skilled, dedicated developer who easily solves complex issues. His expertise in software development is remarkable.",
    company: "UI/UX Collaboration",
    role: "Farzana Khan, UI/UX Designer",
  },
  {
    id: 5,
    quote:
      "Shahmir's collaborative mindset and proficiency in development consistently benefit our company. A valuable asset to any team.",
    company: "Content Team",
    role: "Syeda Faiza Fatima, Content Writer",
  },
  {
    id: 6,
    quote:
      "With strong backend expertise and a great attitude, Shahmir made a major impact on our architecture and code quality.",
    company: "Design & Dev Team",
    role: "Sundas Siddique, UX/UI Designer",
  },
  {
    id: 7,
    quote:
      "Shahmir brings positive energy and dedication to every task. A hardworking employee any team would be lucky to have.",
    company: "SMM & Branding Team",
    role: "Rameen Khan, Content Marketer",
  },
  {
    id: 8,
    quote:
      "A standout backend developer. Shahmir delivers scalable solutions and writes clean, efficient code with a strong grasp on server-side tech.",
    company: "Dev Team",
    role: "Bakhtawar Saleem, Node.js Developer",
  },
  {
    id: 9,
    quote:
      "A skilled backend engineer whose collaborative efforts and technical skills made a huge impact on our projects. Highly recommended!",
    company: "Backend Team",
    role: "Jawad Shaikh, Developer",
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
