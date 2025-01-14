"use client";
import styles from "../styles/Work.module.css";

import Image from "next/image";
import { useTheme } from "styled-components";
import { HStack, TagLabel } from "@chakra-ui/react";
import { Tag } from "./ui/tag";
import { LinkIcon } from "@/Constants/icons";
import { Card } from "@/types/work";

interface WorkProjectProps {
  project: Card;
  id: number;
}

const WorkProject: React.FC<WorkProjectProps> = ({ project, id }) => {
  const currentTheme = useTheme();

  console.log("project", project.button[0].link);

  return (
    <div
      className={styles.parentofparentcard}
      style={{ justifyContent: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.label}</h1>
          <HStack spaceY={2}>
            {project.text.content.slice(1).map((tech, i) => (
              <Tag
                key={i}
                size="sm"
                borderRadius="md"
                style={{ marginTop: 0 }}
                variant="subtle"
                colorScheme={currentTheme.name === "light" ? "cyan" : "purple"}
              >
                <TagLabel>{tech.content[0].text}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </div>
        <div className={styles.imageandsocials}>
          <div
            className={styles.card}
            style={{
              borderColor: currentTheme.footerColor,
              position: "relative",
            }}
          >
            <Image
              src={project.text.content[0].content[0].attrs.src}
              alt="thumbnail image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div
              className={styles.socialIcon}
              style={{
                color: currentTheme.subtext,
                borderColor: currentTheme.subtext,
              }}
            >
              {/* <Link href={project.button[0]?.link?.url} > */}
              <LinkIcon />
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>
            {project.text.content[0].content[1].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
