import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const metadata = {
  title: "Portfolio",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <html lang="en">
        <body className="container dark sorareg">{children}</body>
      </html>
      <SmoothCursor />
    </div>
  );
}
