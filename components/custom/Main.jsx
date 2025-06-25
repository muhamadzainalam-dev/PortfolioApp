"use client";
import About from "./About";
import Resume from "./Resume";
import Certicates from "./Certicates";
import Services from "./Services";
import Portfolio from "@/components/custom/portfolio";
import Testimionals from "./Testimionals";
import Contact from "./Contact";
import FooterImage from "./FooterImage";

export default function Main() {
  return (
    <div className="w-full max-w-screen mx-auto px-4 sm:px-6 md:px-8 lg:px-0 overflow-x-hidden lg:overflow-x-visible">
      {/* About Section */}
      <div id="about" className="pt-24 scroll-mt-20">
        <About />
      </div>

      {/* Resume Section */}
      <div id="resume" className="pt-24 scroll-mt-20">
        <Resume />
      </div>

      {/* Certificate Section */}
      <div id="resume" className="pt-24 scroll-mt-20">
        <Certicates />
      </div>

      {/* Services Section */}
      <div id="services" className="pt-24 scroll-mt-20">
        <Services />
      </div>

      {/* Portfolio Section */}
      <div id="projects" className="pt-24 scroll-mt-20">
        <Portfolio />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="pt-24 scroll-mt-20">
        <Testimionals />
      </div>

      {/* Contact Section */}
      <div id="message" className="pt-24 scroll-mt-20">
        <Contact />
      </div>

      {/* Footer Image */}
      <div>
        <FooterImage />
      </div>
    </div>
  );
}
