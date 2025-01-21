import { useTheme } from "styled-components";
import { HStack, TagLabel } from "@chakra-ui/react";
import { Tag } from "./ui/tag";
import { LinkIcon } from "@/Constants/icons";
import { Card } from "@/types/work";
import styles from "../styles/Work.module.css";
import { useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface WorkProjectProps {
  project: Card;
  id: number;
}

const WorkProject: React.FC<WorkProjectProps> = ({ project, id }) => {
  const currentTheme = useTheme();

  // Filtra as imagens do conteúdo do projeto
  const images = useMemo(() => {
    return project.text.content[0].content.filter(item => item.type === 'image') as ImageContent[];
  }, [project]); // Apenas recalcula quando o 'project' muda

  console.log("images",images)
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
            }}
          >
           {images.length > 0 && <ImageCarousel images={images} />} 
               

          </div>
          <div>
            <div
              className={styles.socialIcon}
              style={{
                color: currentTheme.subtext,
                borderColor: currentTheme.subtext,
              }}
            >
              <LinkIcon />
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

// Tipos de imagem para o TypeScript
interface ImageAttrs {
  id: number;
  alt: string;
  src: string;
  title: string;
  source: string;
  copyright: string;
  meta_data: object;
}

interface ImageContent {
  type: 'image';
  attrs: ImageAttrs;
}

interface ImageCarouselProps {
  images: ImageContent[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        showThumbs={false} 
        showStatus={false} 
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div key={index} style={{height: "100%"}}>
            <img
              src={image.attrs.src}
              alt={image.attrs.alt || 'Image'}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
