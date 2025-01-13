"use client";
import { useMediaQuery } from "@chakra-ui/react";
import styles from "../styles/NavbarFooter.module.css";
import Navlinks from "./Navlinks";
import { useState, useEffect } from "react";
import { Switch } from "./ui/switch";
import Link from "next/link";
import { NavBarTypes } from "@/types/navbar";
import { useTheme } from "styled-components";

interface NavbarProps {
  toggleTheme: () => void;
  navData: NavBarTypes;

}

const Navbar: React.FC<NavbarProps> = ({
  toggleTheme,
  navData,
}) => {
    const currentTheme = useTheme();
  
  console.log("navData", navData);
  const [drawerVisible] = useMediaQuery(["(max-width: 950px)"], {
    ssr: false,
  }); // Passar a query como array

  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme.secondary,
        boxShadow: currentTheme.boxShadow,
        position: sticky ? "fixed" : "static",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "baseline",
          marginBottom: !drawerVisible ? "0" : "10px",
        }}
      >
        <Link href="/">
          <h2 className={styles.logo}>{navData.headline}</h2>
        </Link>
        {!drawerVisible ? (
          <div style={{ display: "flex" }}>
            <Navlinks navData={navData} />
          </div>
        ) : null}
        <Switch
          id="dark-mode"
          colorScheme="purple"
          size={!drawerVisible ? "lg" : "md"}
          checked={currentTheme.name === "dark"}
          onChange={toggleTheme}
        />
      </div>
      {drawerVisible ? (
        <>
          <hr></hr>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
            }}
          >
            <Navlinks navData={navData} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
