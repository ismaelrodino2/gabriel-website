"use client";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import HomeProject from "./HomeProject";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import { useTheme } from "styled-components";
import { Home1Section } from "@/types/home-1";
import { Home2Section } from "@/types/home-2";
import { Home3Section } from "@/types/home-3";
import { Home4Section } from "@/types/home-4";
import { Home5Section } from "@/types/home-5";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
interface CustomCSSProperties extends React.CSSProperties {
  "--image-url"?: string;
}

const HomePage = ({
  mainContent,
}: {
  mainContent: [
    Home1Section,
    Home2Section,
    Home3Section,
    Home4Section,
    Home5Section
  ];
}) => {
  const currentTheme = useTheme();

  console.log("mainContent[1].cards", mainContent[1].cards);
  return (
    <div>
      <div
        className={styles.homeheading}
        style={
          {
            "--image-url": `url(${mainContent[0].image.filename})`,
            backgroundColor: currentTheme.secondary,
          } as CustomCSSProperties
        }
      >
        <h1 className={styles.heading}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi there")
                .pauseFor(300)
                .typeString(" I am Gabriel.")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString(" I am a UI/UX Designer.")
                .pauseFor(1000)
                .deleteChars(23)
                .typeString(" I am a digital Designer.")
                .pauseFor(1000)
                .deleteChars(25) 
                .changeDeleteSpeed(50)
                .start();
            }}
          />
        </h1>

        <h2
          className={styles.subheading}
          style={{ color: currentTheme.subtext }}
        >
          {mainContent[0].text?.content[0].content[0].text}
        </h2>
        <Link href="#work"></Link>
      </div>
      <div className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {mainContent[1].headline}
        </h1>
        {mainContent[1].cards.slice(0).map((card, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <HomeProject card={card} id={key} />
            </div>
          );
        })}
        <div
          style={{
            textAlign: "center",
            paddingBottom: "2rem",
            width: "fit",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div
        id="skills"
        className={styles.homeSkillSection}
        style={{ backgroundColor: currentTheme.secondary }}
      >
        <Skills data={mainContent[2]} />
      </div>
      <Education data={mainContent[3]} />
      <div
        id="about"
        className={styles.homeAboutSection}
        style={
          {
            "--image-url-about": `url(${mainContent[4].image.filename})`,
            backgroundColor: currentTheme.secondary,
          } as CustomCSSProperties
        }
      >
        <h1 className={styles.workheading} data-aos="fade-up">
          {mainContent[4].headline}
        </h1>
        <p
          className={styles.aboutText}
          style={{ color: currentTheme.subtext }}
          data-aos="fade-up"
        >
          {mainContent[4].text.content[0].content[0].text}
        </p>
        <div
          data-aos="fade-up"
          style={{
            textAlign: "center",
            padding: "1rem 0",
            position: "relative",
            display: "flex",
            color: currentTheme.subtext,
          }}
        >
          <Link href={mainContent[4].button[0].link.url} target="_blank">
            <div
              className={styles.cta4}
              style={{
                background: "transparent",
                border: `2px solid ${currentTheme.subtext}`,
                display: "flex",
                alignItems: "center",
              }}
            >
              {mainContent[4].button[0].label}&nbsp;&nbsp;&nbsp;&nbsp;
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
