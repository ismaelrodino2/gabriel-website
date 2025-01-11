"use client";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useTheme } from "styled-components";
import { Home3Section } from "@/types/home-3";
import React from "react";

const Skills = ({ data }: { data: Home3Section }) => {
  const currentTheme = useTheme();

  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {data.headline}
      </h1>
      <div
        className={styles.skills}
        style={{ color: currentTheme.subtext, display: "flex", gap: "1rem" }}
      >
        {data.cards
          ? data.cards.map((value, key1) => {
              return (
                <React.Fragment key={key1}>
                  <div
                    
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div>
                      <ul className={styles.skillList} data-aos="fade-up">
                        <h1
                          className={styles.skillHeading}
                          style={{ color: currentTheme.text }}
                        >
                          {value.label}
                        </h1>
                        {value.text.content
                          ? value.text.content.map((skill, key2) => {
                              return (
                                <h2 key={key2}>{skill.content[0].text}</h2>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  </div>
                  {key1 !== data.cards.length - 1 && (
                    <div className={styles.verticalLine} />
                  )}
                </React.Fragment >
              );
            })
          : null}
      </div>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "2rem",
          width: "fit",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0",
        }}
      >
        <Link href={data.button.url}>
          <div
            className={styles.cta3}
            style={{
              background: "transparent",
              border: `2px solid ${currentTheme.accent}`,
            }}
          >
           {data.button.title} <span>&gt;</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Skills;
