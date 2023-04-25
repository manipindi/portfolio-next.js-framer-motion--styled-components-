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
  position: relative;

  @media screen and (max-width: 1024px) {
    min-height: 150vh;
    padding-top: 2rem;
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
    let tql = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mql?.matches);
    setIsTablet(tql?.matches);
  }, []);

  return (
    <InfoContentWrapper ref={contentRef}>
      <Intersector style={{ scaleY: scrollYProgress }} />
      <TextBox
        scrollYProgress={scrollYProgress}
        positions={[0, 0.25]}
        values = {isTablet ? ["0%", "-50%"] : ["50%", "100%"] }
        crosVal = {["0%", "50%"]}
        style={isTablet ? { textAlign: "center" , position : "absolute",  top:"15%"} : {}}
      >
        <h4>
          Building scalable web applications from future.
        </h4>
      </TextBox>

      <TextBox
        scrollYProgress={scrollYProgress}
        positions={[0, 0.5]}
        values = {isTablet ? ["0%", "-50%"] : ["70vw", "55vw"]}
        crosVal = {["100%", "50%"]}
        style={isTablet ? { textAlign: "center" , position : "absolute", top:"35%"} : {textAlign: "left"}}
      >
        <h4>No nonsense. Just great products with great speed.</h4>
      </TextBox>

      <TextBox
        positions={[0, 0.75]}
        values = {isTablet ? ["0%", "-50%"] : ["50%", "100%"] }
        scrollYProgress={scrollYProgress}
        crosVal = {["-20%", "50%"]}
        style={isTablet ? { textAlign: "center" , position : "absolute", top:"55%"} : {}}
      >
        <h4>My customers feel the difference and my work shows it.</h4>
      </TextBox>

      <TextBox
        positions={[0, 1]}
        values = {isTablet ? ["0", "-50%"] : ["70vw", "55vw"]}
        scrollYProgress={scrollYProgress}
        crosVal = {["100%", "50%"]}
        style={isTablet ? { textAlign: "center" , position : "absolute", top:"75%"} : {textAlign: "left"}}
      >
        <h4>Let&apos;s collaborate and build great products together.</h4>
      </TextBox>
    </InfoContentWrapper>
  );
}
