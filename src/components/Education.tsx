import React from "react";
import styles from "../styles/Home.module.css";
import { useTheme } from "styled-components";
import { Home4Section } from "@/types/home-4";

const Education = ({ data }: { data: Home4Section }) => {
  const currentTheme = useTheme();

  return (
    <div className={styles.educationWrapper}>
      <div className={styles.workheading} data-aos="fade-up">
        {data.headline}
      </div>

      <div className={styles.timeline}>
        <ul>
          {data.cards
            ? data.cards.map((value, key) => {
                return (
                  <li data-aos="fade-up" key={key}>
                    <div className={styles.content}>
                      <h3 style={{ color: currentTheme.accent }}>
                        {value.text.content[0].content[0].text}
                      </h3>
                      <p style={{ color: currentTheme.text }}>
                        {value.text.content[1].content[0].text}
                      </p>
                      <p style={{ color: currentTheme.subtext }}>
                        {value.text.content[2].content[0].text}
                      </p>
                    </div>
                    <div
                      className={styles.time}
                      style={{
                        border: `2px solid ${currentTheme.accent}`,
                        color: currentTheme.accent,
                      }}
                    >
                      <h4>{value.label}</h4>
                    </div>
                  </li>
                );
              })
            : null}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>

      {/* <div
        style={{
          textAlign: "center",
          paddingBottom: "2rem",
          width: "fit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href={data.button.url}>
          <div
            className={styles.cta3}
            style={{
              background: currentTheme.accent,
              color: currentTheme.contrastText,
            }}
          >
            {data.button.title} <span>&gt;</span>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Education;
