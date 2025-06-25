import React, { useState, useEffect, useRef } from "react";

export default function FooterImage() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`transform transition-all duration-1000 ease-out -my-5 px-8 ${
        isVisible ? "translate-y-0 opacity-15" : "-translate-y-20 opacity-0"
      }`}
    >
      {/* ZAIN text */}
      <div className="flex justify-center items-center z-10">
        <h1 className="text-[16vw] sorabold text-white opacity-35 tracking-[0.2em]">
          ZAIN
        </h1>
      </div>
    </div>
  );
}
