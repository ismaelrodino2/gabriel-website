"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FooterTypes } from "@/types/footer";
import { NavBarTypes } from "@/types/navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  navFooterData: [NavBarTypes, FooterTypes];

}

const Layout: React.FC<LayoutProps> = ({
  children,
  toggleTheme,
  navFooterData
}) => {
  
  return (
    <div style={{
      minHeight: '100vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <Navbar toggleTheme={toggleTheme}  navData={navFooterData[0]} />
      {children}
      <Footer footerData={navFooterData[1]} />
    </div>
  );
};

export default Layout;
