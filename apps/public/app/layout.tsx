import type { Metadata } from "next";
import type React from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Public site",
  description: "Marketing shell built with shared core primitives"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
