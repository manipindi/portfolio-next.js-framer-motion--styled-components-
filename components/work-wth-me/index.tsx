import VennBall from "@/shared/atoms/venn-ball";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Bg from 'assets/explore/work-with-me/bg.jpeg'

const Container:any = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  padding: 100px 0;
  background-size: cover;
  background-attachment: fixed;

  ${({Bg}:any)=> Bg && css`
    background-image: url(${Bg?.src});
  `}

  .header {
    color: white;
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;

    h1 {
      font-size: 50px;
      margin: 20px 0 10px;
      line-height: 60px;
    }
    p {
      font-size: 16px;
      line-height: 32px;
    }
  }

  @media screen and (max-width: 420px) {
    .header {
      h1 {
        font-size: 36px;
      }
    }
  }
`;

const WhenDiagramContainer = styled.div`
  position: relative;
  /* border: 1px solid red; */
  width: 41%;
  height: 450px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1366px) {
    width: 42%;
  }

  @media screen and (max-width: 1280px) {
    width: 45%;
  }

  @media screen and (max-width: 840px) {
    width: 72%;
  }

  @media screen and (max-width: 768px) {
    width: 78%;
  }

  @media screen and (max-width: 440px) {
    width: 350px;
    height: 300px;
  }
`;

export default function WorkWithMe() {
  const whyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: whyRef,
    offset: ["start center", "end end"],
  });

  const leftBallXVal = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 0.9, 1],
    ["-10%", "0%", "10%", "20%", "30%"]
  );
  const leftBallYVal = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 0.9, 1],
    ["120", "110%", "90%", "80%", "60%"]
  );

  const rightBallXVal = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 0.9, 1],
    ["140%", "130%", "120%", "110%", "100%"]
  );
  const rightBallYVal = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 0.9, 1],
    ["120", "110%", "90%", "80%", "60%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [0, 0.2, 0.4, 1]
  );

  return (
    <Container Bg={Bg} ref={whyRef}>
      <div className="header">
        <h1 className="heading">Why work with me</h1>
        <p>
          Ability to deliver high-quality and cost-effective solutions . Everything from developing
          an initial mobile strategy, UX/UI development best practices in
          agile project management – I haven’t only perfected what I do but
          also how I do it.
        </p>
      </div>
      <WhenDiagramContainer>
        <VennBall style={{ left: 0, right: 0, opacity }}>
          <h2>Quality</h2>
        </VennBall>
        <VennBall style={{ x: rightBallXVal, y: rightBallYVal, opacity }}>
          <h2>Cost</h2>
        </VennBall>
        <VennBall style={{ x: leftBallXVal, y: leftBallYVal, opacity }}>
          <h2>Speed</h2>
        </VennBall>
      </WhenDiagramContainer>
    </Container>
  );
}
