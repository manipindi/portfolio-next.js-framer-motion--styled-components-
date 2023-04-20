import TextBox from "@/shared/atoms/text-box";
import React, { useEffect, useRef, useState } from "react";
import { Intersector } from "..";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const InfoContentWrapper = styled(motion.div)`
  padding-top: 15rem;
  padding-bottom: 6rem;
  overflow: hidden;

  @media screen and (max-width: 420px) {
    padding-top: 7rem;
    padding-bottom: 2rem;
  }
`;

export default function InfoContent() {
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start center", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    let mql = window.matchMedia("(max-width: 450px)");
    let tql = window.matchMedia("(max-width: 840px)");
    setIsMobile(mql?.matches);
    setIsTablet(tql?.matches);
  }, []);

  return (
    <InfoContentWrapper ref={contentRef}>
      <Intersector style={{ scaleY: scrollYProgress }} />
      <TextBox
        scrollYProgress={scrollYProgress}
        positions={[0, 0.25]}
        values = {isMobile ? ["0%", "18%"] : isTablet ? ["0%", "80%"] : ["50%", "100%"] }
        style={isTablet || isMobile ? { textAlign: "center" } : {}}
      >
        <h4>
          Building scalable web applications from future.
        </h4>
      </TextBox>

      <TextBox
        scrollYProgress={scrollYProgress}
        positions={[0, 0.5]}
        values = {isMobile ? ["50%", "18%"] : isTablet ? ["90vw", "30vw"] : ["70vw", "55vw"]}
        style={
          isTablet || isMobile ? { textAlign: "center" } : { textAlign: "left" }
        }
      >
        <h4>No nonsense. Just great products with great speed.</h4>
      </TextBox>

      <TextBox
        positions={[0, 0.75]}
        values = {isMobile ? ["0%", "18%"] : isTablet ? ["0%", "80%"] : ["50%", "100%"] }
        scrollYProgress={scrollYProgress}
        style={isTablet || isMobile ? { textAlign: "center" } : {}}
      >
        <h4>My customers feel the difference and my work shows it.</h4>
      </TextBox>

      <TextBox
        positions={[0, 1]}
        values = {isMobile ? ["50%", "18%"] : isTablet ? ["90vw", "30vw"] : ["70vw", "55vw"]}
        style={
          isTablet || isMobile ? { textAlign: "center" } : { textAlign: "left" }
        }
        scrollYProgress={scrollYProgress}
      >
        <h4>Let&apos;s collaborate and build great products together.</h4>
      </TextBox>
    </InfoContentWrapper>
  );
}
