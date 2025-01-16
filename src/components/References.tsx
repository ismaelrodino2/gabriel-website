// components/References.tsx
import React from "react";
import styles from "../styles/References.module.css";
import { Home5Section } from "@/types/home-5";
import { render } from "storyblok-rich-text-react-renderer";
import { useTheme } from "styled-components";

type ReferencesProps = {
  data: Home5Section;
};

const References: React.FC<ReferencesProps> = ({ data }) => {
  console.log("Home5Section", data);
  const currentTheme = useTheme();

  return (
    <section
      className={styles.references}
      style={{
        backgroundColor: currentTheme.secondary,
        color: currentTheme.subtext,
      }}
    >
      <h2 className={styles.title}>{data.headline}</h2>
      <div className={styles.grid}>
        {data.cards.map((reference, index) => (
          <div key={index} className={styles.card}>
            <img
              src={reference.icon.filename}
              alt={reference.label}
              className={styles.image}
            />
            <h3 className={styles.name}>{reference.label}</h3>
            <div className={styles.description}>{render(reference.text)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
