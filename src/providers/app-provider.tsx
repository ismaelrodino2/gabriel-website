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

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
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

  console.log("Current Theme:", currentTheme);

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Toaster />
        {children}
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
