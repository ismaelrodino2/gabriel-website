"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "../ThemeConfig";
import { lightTheme, darkTheme } from "../Constants/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { defaultSystem } from "@chakra-ui/react";
import Layout from "./layout";
import { Toaster } from "@/components/ui/toaster";
import { NavBarTypes } from "@/types/navbar";
import { FooterTypes } from "@/types/footer";

type AppProviderProps = {
  children: React.ReactNode;
  navFooterData: [NavBarTypes, FooterTypes]
};

const AppProvider = ({ children, navFooterData }: AppProviderProps) => {
  console.log("tetee", navFooterData)
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  console.log("navFooterData:", navFooterData);

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} navFooterData={navFooterData}>
        <Toaster />
        {children}
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
