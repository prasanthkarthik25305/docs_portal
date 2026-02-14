"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header toggleSidebar={() => setIsOpen(!isOpen)} />
      
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />
        
        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isOpen ? "lg:ml-64" : "lg:ml-0"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
