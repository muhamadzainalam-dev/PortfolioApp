import Image from "next/image";
import {
  Linkedin,
  Github,
  Twitter,
  Dribbble,
  FileText,
  Mail,
} from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";

export default function ProfileCard() {
  return (
    <div
      className="rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-sm text-center border mx-auto"
      style={{
        background:
          "linear-gradient(123.51deg, rgba(215, 237, 237, 0.1) -61.8%, rgba(204, 235, 235, 0.01) 100%)",
      }}
    >
      {/* Profile Image - full width and square */}
      <div className="relative w-full aspect-square mb-6">
        <Image
          src="/dp.jpg"
          alt="Profile Photo"
          fill
          className="rounded-3xl object-cover"
        />
      </div>

      {/* Name and Title */}
      <div className="mb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
          Zain Alam
        </h1>
        <p className="text-green-400 font-semibold tracking-wider text-sm sm:text-base">
          Web Developer
        </p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <a
          href="mailto:muhamadzainalam.dev@gmail.com"
          className="text-white hover:text-green-400 transition-colors underline break-all"
        >
          muhamadzainalam.dev@gmail.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/muhammad-fareed-alam-798612370/"
          target="_blank"
          className="text-white p-3 rounded-full backdrop-blur-xl border hover:text-black hover:bg-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/muhamadzainalam-dev"
          className="text-white p-3 rounded-full backdrop-blur-xl border hover:text-black hover:bg-white transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://x.com/mdzainalamdev"
          className="text-white p-3 rounded-full backdrop-blur-xl border hover:text-black hover:bg-white transition-colors"
        >
          <Twitter size={24} />
        </a>
        <a
          href="#"
          className="text-white p-3 rounded-full backdrop-blur-xl border hover:text-black hover:bg-white transition-colors"
        >
          <Dribbble size={24} />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <a href="#resume" className="block w-full">
          <ShinyButton className="w-full rounded-full h-12 sm:h-14">
            <div className="flex items-center justify-center text-base sm:text-lg font-semibold">
              <FileText className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              View My CV
            </div>
          </ShinyButton>
        </a>

        <a href="#message" className="block w-full">
          <ShinyButton className="w-full rounded-full h-12 sm:h-14 bg-green-500 hover:bg-green-600">
            <div className="flex items-center justify-center text-base sm:text-lg text-black font-semibold">
              <Mail className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Contact Me
            </div>
          </ShinyButton>
        </a>
      </div>
    </div>
  );
}
