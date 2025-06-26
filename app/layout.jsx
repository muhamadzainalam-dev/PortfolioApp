import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const metadata = {
  metadataBase: new URL("https://muhammudzainalam.vercel.app/"),
  title: "Muhammad Zain Alam | Web Developer",
  description:
    "Welcome to the official portfolio of Muhammad Zain Alam — a passionate front-end and full-stack JavaScript developer from Karachi, Pakistan. Explore cutting-edge web projects built with React, Next.js, MongoDB, and more. Discover real-world experience, industry-recognized certifications, and a deep commitment to clean code and modern design.",

  openGraph: {
    title: "Muhammad Zain Alam | Web Developer",
    description:
      "Discover the work of Muhammad Zain Alam — a skilled web developer with a focus on modern UI/UX, full-stack development (MERN), and deployment-ready solutions. Featuring real-world projects, certifications, and hands-on experience with the latest web technologies.",
    url: "https://muhammudzainalam.vercel.app/",
    siteName: "Muhammad Zain Alam",
    images: [
      {
        url: "/previewimage.png",
        width: 1200,
        height: 630,
        alt: "Preview of Muhammad Zain Alam's Web Developer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zain Alam | Web Developer",
    description:
      "Explore the interactive portfolio of Muhammad Zain Alam — a creative developer building scalable web apps with React, Next.js, MongoDB, and more.",
    images: ["/previewimage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container dark sorareg">
        {children}
        <SmoothCursor />
      </body>
    </html>
  );
}
