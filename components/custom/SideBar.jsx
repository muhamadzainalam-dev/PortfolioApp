import {
  FaUser,
  FaFileAlt,
  FaCog,
  FaBriefcase,
  FaPaperPlane
} from "react-icons/fa"
import { BsFillChatQuoteFill } from "react-icons/bs"
import { PiCertificateFill } from "react-icons/pi";

const items = [
  { title: "About", icon: FaUser, href: "#" },
  { title: "RESUME", icon: FaFileAlt, href: "#resume" },
  { title: "CERTIFICATES", icon: PiCertificateFill, href: "#certificates" },
  { title: "Services", icon: FaCog, href: "#services" },
  { title: "Portfolio", icon: FaBriefcase, href: "#projects" },
  { title: "TESTIMONIALS", icon: BsFillChatQuoteFill, href: "#testimonials" },
  { title: "Contact", icon: FaPaperPlane, href: "#message" }
]

function Tooltip({ children, content }) {
  return (
    <div className="group relative">
      {children}
      <div className="absolute right-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 hidden lg:block">
        <div className="bg-black mr-5 uppercase text-white px-3 py-2 rounded-md text-sm font-medium shadow-lg whitespace-nowrap border">
          {content}
        </div>
      </div>
    </div>
  )
}

export default function AppSideBar({ isHorizontal = false }) {
  return (
    <div
      className={`backdrop-blur-sm shadow-lg rounded-full border 
        ${isHorizontal ? "px-4 py-2 w-full flex justify-center" : "p-4"} 
        bg-black/50`}
    >
      <div
        className={`${
          isHorizontal
            ? "flex flex-row items-center justify-center gap-2 w-full"
            : "flex flex-col items-center space-y-3"
        }`}
      >
        {items.map(item => (
          <Tooltip key={item.title} content={item.title}>
            <a
              href={item.href}
              className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-white text-white hover:text-black transition-all duration-200 hover:scale-105"
            >
              <item.icon className="text-xl" />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
