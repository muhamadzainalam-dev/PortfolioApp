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
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "50px", // Start animation 50px before element enters viewport
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
      className={`transform transition-all duration-1000 ease-out -my-20 -mx-5 ${
        isVisible ? "translate-y-0 opacity-15" : "-translate-y-20 opacity-0"
      }`}
    >
      <img src="/footer_image.png" alt="" />
    </div>
  );
}
