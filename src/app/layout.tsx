import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHRIS G VISUAL'S — Professional Video Editing & Visual Production",
  description: "Professional Video Editing, Motion Design, Visualizers and Creative Content for Artists, Brands and Creators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
