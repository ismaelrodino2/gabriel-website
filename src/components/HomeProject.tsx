import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useTheme } from "styled-components";
import { Card } from "@/types/home-2";

// Definir a interface para o tipo de project
interface Project {
  card: Card;
  id: number;
}

const HomeProject: React.FC<Project> = ({ card, id }) => {
  const currentTheme = useTheme();

  return (
    <div
      className={styles.projectmain}
      style={{
        borderColor: currentTheme.accent,
        borderRadius: id % 2 === 0 ? "50px 0 0 0" : "0 0 50px 0",
      }}
    >
      <div className={styles.projectContent}>
        <div
          className={styles.projectIcon}
          style={{
            color: currentTheme.accent,
            backgroundColor: currentTheme.footerColor,
            borderColor: currentTheme.accent,
          }}
        >
          <FontAwesomeIcon icon={faTelegramPlane} size="4x" />
        </div>
        <h1 className={styles.projectTitle}>{card.label}</h1>
        <h2
          className={styles.projectSubTitle}
          style={{ color: currentTheme.subtext }}
        >
          {card.text}
        </h2>
        <Link
          href={card.button[0].link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.cta2} style={{ color: currentTheme.tertiary }}>
            {card.button[0].label}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeProject;
