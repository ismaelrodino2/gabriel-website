import styles from "../styles/Work.module.css";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";
import { headings } from "../Constants/userinfo";
import { useTheme } from "styled-components";

interface CarouselItemProps {
  children: React.ReactNode;
  width?: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  width = "100%",
}) => {
  const currentTheme = useTheme();

  return (
    <div
      className={styles.carouselItem}
      style={{ width: width, backgroundColor: currentTheme.secondary }}
    >
      {children}
    </div>
  );
};

interface CarouselProps {
  children: React.ReactElement<CarouselItemProps>[]; // Garantindo que os filhos são do tipo CarouselItem
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const currentTheme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isSmall] = useMediaQuery(["(max-width: 1200px)"], {
    ssr: false,
  });
  const [isVerySmall] = useMediaQuery(["(max-width: 800px)"], {
    ssr: false,
  });
  const dividingFactor = isSmall ? (isVerySmall ? 1 : 2) : 3;
  const arrayLength = Math.ceil(children.length / dividingFactor);
  const repeat = Array.from(Array(arrayLength).keys());

  useEffect(() => {
    setActiveIndex(0);
  }, [dividingFactor]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = arrayLength - 1;
    } else if (newIndex >= arrayLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={styles.carousel}
      id="blogs"
      style={{ backgroundColor: currentTheme.secondary }}
      data-aos="fade-up"
    >
      <div className={styles.blogHeading}>{headings.blogs}</div>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {children.map((child) =>
          React.cloneElement(child, {
            width: isSmall ? (isVerySmall ? "100%" : "50%") : "33.33%",
          })
        )}
      </div>
      <div className={styles.indicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          &lt;
        </button>
        {repeat.map((dot, index) => (
          <button
            key={dot}
            className={`${index === activeIndex ? styles.active : ""}`}
            onClick={() => {
              updateIndex(index);
            }}
          >
            &bull;
          </button>
        ))}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
