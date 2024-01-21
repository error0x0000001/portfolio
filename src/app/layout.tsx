import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umashankar Pandey",
  description: "Meet Umashankar, your Front-End wizard ready to tackle challenges with a laugh and a code flourish. I weave efficient web spells with the magic trio of JavaScript, React, and Redux – making applications so smooth, even Gandalf would be impressed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
