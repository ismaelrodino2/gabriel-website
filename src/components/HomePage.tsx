"use client";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeProject from "./HomeProject";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";
import Education from "./Education";
import { useTheme } from "styled-components";
import { Home1Section } from "@/types/home-1";
import { Home2Section } from "@/types/home-2";

interface CustomCSSProperties extends React.CSSProperties {
  '--image-url'?: string;  // Definindo a variável CSS personalizada
}

const HomePage = ({ mainContent }: { mainContent: [Home1Section, Home2Section] }) => {
  const currentTheme = useTheme();
  console.log("currentTheme", currentTheme);
  return (
    <div>
      <div
        className={styles.homeheading}
        style={{
          '--image-url': `url(${mainContent[0].image.filename})`, 
          backgroundColor: currentTheme.secondary
        } as CustomCSSProperties} 
      >
        <h1 className={styles.heading}>{mainContent[0].headline} </h1>
        <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          {mainContent[0].text?.content[0].content[0].text}
        </h2>
        <Link href="#work">
          <div
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {mainContent[0].button[0].label}
          </div>
        </Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.workHomePage}
        </h1>
        {mainContent[1].cards.slice(0, 3).map((card, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeProject card={card} id={key} />
            </div>
          );
        })}
        <div style={{ textAlign: "center", paddingBottom: "2rem", width: 'fit', display: 'flex', justifyContent: 'center' }}>
          <Link href="/work" >
            <div
              className={styles.cta3}
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.contrastText,
              }}
            >
              {ctaTexts.workCTA} <span>&gt;</span>
            </div>
          </Link>
        </div>
      </div>
      <div
        id="skills"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills />
      </div>
      <div>{userinfo.education.visible ? <Education /> : null}</div>
      <div
        id="about"
        className={styles.homeAboutSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <p
          className={styles.aboutText}
          style={{ color: currentTheme.subtext }}
          data-aos="fade-up"
        >
          {userinfo.about.content}
        </p>
        <div
          data-aos="fade-up"
          style={{
            textAlign: "center",
            padding: "1rem 0",
            margin: "1rem 0",
            position: "relative",
            display: "flex",
            color: currentTheme.subtext,
          }}
        >
          <Link href={userinfo.about.resume} target="_blank">
            <div
              className={styles.cta4}
              style={{
                background: "transparent",
                border: `2px solid ${currentTheme.subtext}`,
                display: "flex",
                alignItems: "center",
              }}
            >
              {ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                width="15px"
                height="15px"
                icon={faExternalLinkAlt}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
