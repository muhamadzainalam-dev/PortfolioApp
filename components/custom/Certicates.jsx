"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

const certificates = [
  {
    id: 1,
    title: "Professional Front-End Developer",
    organization: "Coursera (Meta)",
    date: "May 2024",
    status: "Issued",
    credentialId: "META-FE-2024-01",
    image: "https://mma.prnewswire.com/media/1673006/Meta_Logo.jpg?p=facebook", // Replace with actual image path or link
    verifyUrl: "#", // Replace with actual verification URL if available
  },
  {
    id: 2,
    title: "Developing Front-End Apps with React",
    organization: "Coursera (IBM)",
    date: "Apr 2024",
    status: "Issued",
    credentialId: "IBM-REACT-2024-02",
    image:
      "data:image/png;base64,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",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Advanced React",
    organization: "Coursera (Meta)",
    date: "Mar 2024",
    status: "Issued",
    credentialId: "META-ADVREACT-2024-03",
    image: "https://mma.prnewswire.com/media/1673006/Meta_Logo.jpg?p=facebook",
    verifyUrl: "#",
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

export default function Certificates() {
  const certificatesRef = useRef(null);
  const isCertificatesInView = useInView(certificatesRef, { margin: "-100px" });

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
          Certificates
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl mb-16">
        <TextAnimate animation="blurInUp" by="character" once>
          Licenses & Certifications
        </TextAnimate>
      </h1>

      {/* Certificates Grid */}
      <motion.div
        ref={certificatesRef}
        variants={containerVariants}
        initial="hidden"
        animate={isCertificatesInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certificates.map((cert, index) => (
          <AnimatedCard key={cert.id} index={index}>
            <div className="group bg-transparent hover:bg-gradient-to-br hover:from-teal-100/10 hover:to-teal-100/1 transition-all duration-300 rounded-xl border border-[#2d2f33] p-6 hover:shadow-xl">
              {/* Certificate Image */}
              <div className="relative rounded-lg overflow-hidden mb-4 h-48 bg-gradient-to-br from-white/5 to-white/0">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-600 text-black shadow">
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-3">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Building className="w-4 h-4" />
                  <span className="text-sm sm:text-base soralight">
                    {cert.organization}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm sm:text-base soralight">
                    {cert.date}
                  </span>
                </div>

                {/* Credential ID */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm sm:text-base soralight font-mono">
                    {cert.credentialId}
                  </span>
                </div>

                {/* Verify Button */}
                <div className="pt-2">
                  <a
                    href={cert.verifyUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-600/20 text-green-400 hover:bg-green-600/30 hover:text-green-300 transition-all duration-300 border border-green-600/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>
    </div>
  );
}
