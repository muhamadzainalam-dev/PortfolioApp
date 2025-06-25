"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

const certificates = [
  {
    id: 1,
    title: "Back-End Development",
    organization: "Coursera",
    date: "Oct 2023",
    status: "Issued",
    credentialId: "659QZUPZDXLS",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_100_100/company-logo_100_100/0/1630530042036/coursera_logo?e=1756339200&v=beta&t=6kTnO4ZRabpLNVJmRQK-srFYJyBGXEhPikLTe6WQirQ",
    verifyUrl: "#", // Replace with actual URL if available
  },
  {
    id: 2,
    title:
      "Certified Business Professional Master Executive Business Management",
    organization: "Nestlé",
    date: "Sep 2020",
    status: "Issued",
    credentialId: "BM-10042301",
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGaL-YyJ8xd7Q/company-logo_100_100/company-logo_100_100/0/1630615758178/nestle_s_a__logo?e=1756339200&v=beta&t=qQmPaSRyYUi9fRBwL45FRiM3eKYOWUgiBGzG4sBPouo",
    verifyUrl: "#", // Replace with actual URL if available
  },
  {
    id: 3,
    title: "SQL Database Advance",
    organization: "HackerRank",
    date: "Sep 2020",
    status: "Issued",
    credentialId: "85A162DDBFEA",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1756339200&v=beta&t=JQHGRk1yz2pV9ZCic7_0sZlDPsa9mUfdC7k0F3Zg6xo",
    verifyUrl: "#", // Replace with actual credential URL
  },
  {
    id: 4,
    title: "SQL Database",
    organization: "HackerRank",
    date: "Sep 2020",
    status: "Issued",
    credentialId: "953EB6EEEDB01",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1756339200&v=beta&t=JQHGRk1yz2pV9ZCic7_0sZlDPsa9mUfdC7k0F3Zg6xo",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "Introduction to Programming Using Python",
    organization: "HackerRank",
    date: "Jul 2020",
    status: "Issued",
    credentialId: "26B84629Fb1A",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1756339200&v=beta&t=JQHGRk1yz2pV9ZCic7_0sZlDPsa9mUfdC7k0F3Zg6xo",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Microsoft Certified Software Engineer",
    organization: "Microsoft",
    date: "Jun 2020",
    status: "Issued",
    credentialId: "", // Not shown in image
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1756339200&v=beta&t=t_vRhtkgf1aCLVtuTtJvuQOu9xej8MnL7I8iwhoamBs",
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
