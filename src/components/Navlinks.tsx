"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/NavbarFooter.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarTypes } from "@/types/navbar";

const Navlinks = ({ navData }: { navData: NavBarTypes }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <React.Fragment>
      {navData?.cards?.map((el) => {
        return (
          <div className={styles.navlinks} key={el._uid}>
            <Link
              href={el.button[0].link.url}
              style={{
                opacity: activeLink === el.button[0].link.url ? "100%" : "80%",
              }}
            >
              {el.label}
            </Link>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Navlinks;
