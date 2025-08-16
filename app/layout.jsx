import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const metadata = {
  metadataBase: new URL("https://muhammudzainalam.vercel.app"),

  // Enhanced title with location for local SEO
  title: {
    default: "Muhammad Zain Alam | Web Developer",
    template: "%s | Muhammad Zain Alam",
  },

  // Improved description with more keywords and clear value proposition
  description:
    "Welcome to the official portfolio of Muhammad Zain Alam — a passionate front-end and full-stack JavaScript developer from Karachi, Pakistan. Explore cutting-edge web projects built with React, Next.js, MongoDB, and more. Discover real-world experience, industry-recognized certifications, and a deep commitment to clean code and modern design.",

  // Enhanced keywords for better discoverability
  keywords: [
    "Muhammad Zain Alam",
    "Md Zain Alam",
    "web developer Karachi",
    "full-stack developer Pakistan",
    "React developer",
    "Next.js expert",
    "JavaScript developer",
    "MERN stack developer",
    "frontend developer",
    "web designer",
    "freelance developer",
    "muhammad zain alam portfolio",
    "responsive design",
    "modern web developer",
  ],

  // Author and creator information
  authors: [{ name: "Muhammad Zain Alam" }],
  creator: "Muhammad Zain Alam",
  publisher: "Muhammad Zain Alam",

  // Robots directive for better crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Enhanced Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammudzainalam.vercel.app",
    siteName: "Muhammad Zain Alam - Web Developer",
    title: "Muhammad Zain Alam | Web Developer",
    description:
      "Welcome to the official portfolio of Muhammad Zain Alam — a passionate front-end and full-stack JavaScript developer from Karachi, Pakistan. Explore cutting-edge web projects built with React, Next.js, MongoDB, and more. Discover real-world experience, industry-recognized certifications, and a deep commitment to clean code and modern design.",
    images: [
      {
        url: "/previewimage.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zain Alam - Full-Stack Web Developer Portfolio Preview",
        type: "image/png",
      },
      // Add a square version for better social media compatibility
      {
        url: "/previewimage-square.png", // Create this if you have it
        width: 1200,
        height: 1200,
        alt: "Muhammad Zain Alam - Web Developer",
        type: "image/png",
      },
    ],
  },

  // Enhanced Twitter/X metadata
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Add your Twitter handle if you have one
    creator: "@yourtwitterhandle",
    title: "Muhammad Zain Alam | Web Developer",
    description:
      "Welcome to the official portfolio of Muhammad Zain Alam — a passionate front-end and full-stack JavaScript developer from Karachi, Pakistan. Explore cutting-edge web projects built with React, Next.js, MongoDB, and more. Discover real-world experience, industry-recognized certifications, and a deep commitment to clean code and modern design.",
    images: {
      url: "/previewimage.png",
      alt: "Muhammad Zain Alam - Web Developer Portfolio",
    },
  },

  // Verification tags (add these if you have them)
  verification: {
    google: "1-iVgMs1pjG7d6jUAYur81wlXiRdUVq49Wj7UF6BghM",
    yandex: "982cd4257ade4910",
    bing: "https://muhammudzainalam.vercel.app",
  },

  // Additional metadata for better SEO
  category: "Technology",
  classification: "Web Development Portfolio",

  // App-specific metadata
  manifest: "/site.webmanifest", // Create this file for PWA features

  // Geo-location for local SEO
  other: {
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
    "geo.position": "24.8607;67.0011", // Karachi coordinates
    ICBM: "24.8607, 67.0011",
    "DC.title": "Muhammad Zain Alam - Web Developer",
    "DC.creator": "Muhammad Zain Alam",
    "DC.subject": "Web Development, Programming, JavaScript",
    "DC.description":
      "Professional web developer portfolio showcasing modern web applications",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://muhammudzainalam.vercel.app" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Structured data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Zain Alam",
              url: "https://muhammudzainalam.vercel.app",
              image: "https://muhammudzainalam.vercel.app/previewimage.png",
              jobTitle: "Full-Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                addressCountry: "Pakistan",
              },
              alumniOf: "DJ Sindh Govt. Science College",
              knowsAbout: [
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Web Development",
                "Frontend Development",
                "Full-Stack Development",
              ],
              sameAs: [
                "https://github.com/muhamadzainalam-dev",
                "https://linkedin.com/in/muhamadzain-dev",
                "https://twitter.com/mdzainalamdev",
              ],
            }),
          }}
        />
      </head>
      <body className="containerr dark sorareg">
        {children}
        <SmoothCursor />
      </body>
    </html>
  );
}
