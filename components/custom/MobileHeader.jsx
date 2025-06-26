"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import {
  FaUser,
  FaFileAlt,
  FaCog,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { PiCertificateFill } from "react-icons/pi";

const items = [
  { title: "About", icon: FaUser, href: "#about" },
  { title: "RESUME", icon: FaFileAlt, href: "#resume" },
  { title: "CERTIFICATES", icon: PiCertificateFill, href: "#certificates" },
  { title: "Services", icon: FaCog, href: "#services" },
  { title: "Portfolio", icon: FaBriefcase, href: "#projects" },
  { title: "TESTIMONIALS", icon: BsFillChatQuoteFill, href: "#testimonials" },
  { title: "Contact", icon: FaPaperPlane, href: "#message" },
];

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Blur main content when menu is open
  useEffect(() => {
    const content = document.getElementById("page-content");
    if (content) {
      if (isOpen) {
        content.classList.add("blur-sm", "pointer-events-none");
      } else {
        content.classList.remove("blur-sm", "pointer-events-none");
      }
    }
  }, [isOpen]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      for (const item of items) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPos >= offsetTop - 60 &&
            scrollPos < offsetTop + offsetHeight
          ) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <div
      className="flex items-center justify-between text-white px-3 py-3 rounded-full w-full border"
      style={{
        background:
          "linear-gradient(123.51deg, rgba(215, 237, 237, 0.1) -61.8%, rgba(204, 235, 235, 0.01) 100%)",
      }}
    >
      {/* Profile */}
      <div className="flex items-center space-x-3">
        <Image
          src="/dp.jpg"
          alt="Muhammad Zain Alam's Profile"
          width={32}
          height={32}
          className="object-cover w-15 h-15 rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-xl">Zain</span>
          <span className="text-green-400 text-sm font-medium uppercase">
            Web Developer
          </span>
        </div>
      </div>

      {/* Menu Button */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-white focus:outline-none"
        >
          <BiCategoryAlt className="w-8 h-8" />
        </button>

        <div
          className={`absolute -right-1 mt-10 border w-[90vw] bg-black z-50 overflow-hidden transition-all duration-300 ease-in-out shadow-xl ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul>
            {items.map(({ title, icon: Icon, href }, index) => (
              <li key={index}>
                <a
                  href={href}
                  onClick={handleClick}
                  className={`flex w-[90%] mx-auto items-center gap-3 px-4 py-6 text-white transition-colors 
                    ${
                      index !== items.length - 1
                        ? "border-b border-gray-700"
                        : ""
                    }
                    ${
                      activeSection === href
                        ? "text-green-500 font-semibold"
                        : ""
                    }`}
                >
                  <Icon className="text-lg" />
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
