"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "../ThemeConfig";
import { lightTheme, darkTheme } from "../Constants/theme";
import AOS from "aos";
import "aos/dist/aos.css";

const AppProvider = ({ children }: {children: React.ReactNode}) => {
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

  return (
    <ChakraProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children({ toggleTheme, currentTheme })}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
