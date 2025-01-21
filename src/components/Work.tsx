"use client";
import styles from "../styles/Work.module.css";
import WorkProject from "./WorkProject";
import { headings } from "../Constants/userinfo";
import { useTheme } from "styled-components";
import { WorkTypes } from "@/types/work";

export const WorkPage = ({ data }: { data: WorkTypes[] }) => {
  const currentTheme = useTheme();


  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        {data[0].cards.map((project, key) => {
          return (
            <div key={key} data-aos="fade-up">
              <WorkProject project={project} id={key} />
            </div>
          );
        })}
      </div>
      {/* {
                userinfo.experience.visible ? <Experiences /> : null
            } */}
    </div>
  );
};
