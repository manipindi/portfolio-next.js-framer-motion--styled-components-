import VennBall from "@/shared/atoms/venn-ball";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  padding-top: 100px;
  background-image: url("https://assets.website-files.com/5e18a1cc86ccdc5d5a0d353d/5e1ca27ec86dfa8720b98540_home-why-background.jpg");

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
  width: 40%;
  height: 450px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 840px) {
    width: 72%;
    height: 300px;
    /* display: none; */
  }

  @media screen and (max-width: 420px) {
    width: 350px;
    height: 300px;
    /* display: none; */
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
    <Container ref={whyRef}>
      <div className="header">
        <h1 className="heading">Why work with us</h1>
        <p>
          Here at Majestyk, strategy is integrated into every single step of our
          process. Everything from developing an initial mobile strategy, UX/UI
          best practices in our design and agile project management – we haven’t
          only perfected what we do but also how we do it.
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
