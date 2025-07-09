import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sumit Kumar - Developer",
  description:
    "Sumit Kumar is a passionate frontend developer. Building modern web experiences that are both visually stunning and performance-driven.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-secondary"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-secondary flex-1 overflow-y-auto">
          <div className="flex-1 bg-gradient-to-br from-[#1F2A24] to-[#5B7768] min-h-screen lg:rounded-tl-xl border lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
