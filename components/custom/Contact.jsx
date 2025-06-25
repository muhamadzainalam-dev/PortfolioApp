"use client";
import { useState } from "react";
import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypeAnimation } from "react-type-animation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
          Contact
        </span>
      </div>

      {/* Animated Title */}
      <div className="relative inline-flex items-center mb-2">
        <p className="text-white text-2xl sm:text-5xl md:text-6xl leading-tight mr-2">Lets</p>
        <TypeAnimation
          sequence={["Design", 1000, "Craft", 1000, "Go", 1000]}
          speed={50}
          className="text-green-500 text-2xl sm:text-5xl md:text-6xl leading-tight"
          repeat={Infinity}
        />
      </div>
      <h1 className="text-xl sm:text-4xl md:text-5xl mb-8">Incredible Work Together</h1>

      <div className="flex justify-center mb-10">
        <div
          className="w-full border rounded-4xl p-6 md:p-12"
          style={{
            background:
              "linear-gradient(123.51deg, rgba(215, 237, 237, 0.1) -61.8%, rgba(204, 235, 235, 0.01) 100%)",
          }}
        >
          {/* Email & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
            <div>
              <h1 className="text-white text-xl sm:text-2xl hover:text-green-500 transition-all font-normal mb-1 underline decoration-1 underline-offset-4">
                shahmirali966@gmail.com
              </h1>
              <p className="text-gray-400 text-sm">
                Based in San Francisco, CA
              </p>
            </div>

            <div className="flex center gap-4 mx-auto sm:mx-0 md:mx-0 lg:mx-0">
              {[Linkedin, Github, Twitter, Dribbble].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white p-3 rounded-full backdrop-blur-xl border hover:text-black hover:bg-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-8">
            <Input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              className="text-xl h-12 border-0 border-b-2 border-gray-600 rounded-none bg-transparent px-0 text-white placeholder:text-gray-500 focus:border-white focus-visible:ring-0"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-xl h-12 border-0 border-b-2 border-gray-600 rounded-none bg-transparent px-0 text-white placeholder:text-gray-500 focus:border-white focus-visible:ring-0"
            />
            <Textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="text-xl border-0 border-b-2 border-gray-600 rounded-none bg-transparent px-0 text-white placeholder:text-gray-500 focus:border-white focus-visible:ring-0"
            />
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full px-8 py-3 text-lg"
            >
              Get Started!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
