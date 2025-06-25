"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

const certificates = [
  {
    id: 1,
    title: "HTML, CSS, and JavaScript for Web Developers",
    organization: "Johns Hopkins University (Coursera)",
    date: "Jan 2025",
    status: "Issued",
    credentialId: "BF5NSK7Y7YTH",
    image:
      "data:image/jpeg;base64,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",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/BF5NSK7Y7YTH", // add actual Coursera link if available
  },
  {
    id: 2,
    title: "Advanced Styling with Responsive Design",
    organization: "University of Michigan (Coursera)",
    date: "Jan 2025",
    status: "Issued",
    credentialId: "D4GNA4SA68JU",
    image:
      "data:image/png;base64,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",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/D4GNA4SA68JU",
  },
  {
    id: 3,
    title: "Advanced React",
    organization: "Meta (Coursera)",
    date: "Jan 2025",
    status: "Issued",
    credentialId: "QE2HFKBYG3T5",
    image:
      "data:image/png;base64,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",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/QE2HFKBYG3T5",
  },
  {
    id: 4,
    title: "Introduction to Front-End Development",
    organization: "Meta (Coursera)",
    date: "Jan 2025",
    status: "Issued",
    credentialId: "VO4IFBPPBZHO",
    image:
      "data:image/png;base64,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",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/VO4IFBPPBZHO",
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
                    target="_blank"
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
