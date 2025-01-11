"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  currentTheme: {
    secondary: string;
    boxShadow: string;
    name: string;
    footerColor: string;
    subtext: string;
  };
}

const Layout: React.FC<LayoutProps> = ({
  children,
  toggleTheme,
  currentTheme,
}) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {children}
      <Footer currentTheme={currentTheme || {}} />
    </div>
  );
};

export default Layout;
