"use client";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/custom/ProfileCard";
import Main from "@/components/custom/Main";
import AppSideBar from "@/components/custom/SideBar";
import MobileHeader from "@/components/custom/MobileHeader";
import MobileFixedHeader from "@/components/custom/MobileFixedHeader";

export default function Portfolio() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after 100px scroll
      setShowFixedHeader(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row relative">
      {/* Mobile Sticky Top Navbar (Initially Hidden, Show on Scroll) */}
      <div className="lg:hidden fixed top-0 z-50 w-full transition-all duration-500 ease-in-out">
        {showFixedHeader && (
          <div className="animate-slide-down">
            <MobileFixedHeader />
          </div>
        )}
      </div>

      {/* Mobile Header (always shown initially) */}
      <div className="lg:hidden my-5 w-[95%] mx-auto">
        <MobileHeader />
      </div>

      <div id="page-content">
        {/* Mobile Profile Card */}
        <div className="lg:hidden w-[95%] mx-auto" id="page-content">
          <ProfileCard />
        </div>

        {/* Desktop Profile Sidebar */}
        <div className="hidden lg:block fixed left-3 top-[10%] w-[28%] max-w-sm">
          <ProfileCard />
        </div>

        {/* Main Content */}
        <div className="lg:ml-[32%] lg:mr-[8%] px-1 py-6 lg:p-0">
          <Main />
        </div>
      </div>

      {/* Desktop Right Sidebar */}
      <div className="hidden lg:block fixed right-3 top-[10%] w-[6%]">
        <AppSideBar />
      </div>
    </div>
  );
}
