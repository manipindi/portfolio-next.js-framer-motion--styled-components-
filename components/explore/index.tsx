import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import {
  ExploreContent,
  ExploreContentWrapper,
  ExploreWrapper,
  InterSector,
  StyledHeader,
} from "./styles";
import WorkCard from "@/shared/molecules/work-card";
import CardContent from "@/shared/molecules/card-content";
import { cardsData } from "@/utils/card-data-explore";
import WorkWithMe from "../work-wth-me";
import GetInTouch from "../get-in-touch";
import Footer from "../footer";

const CardContentWrapper = styled.div`
  margin-top: 500px;
  position: relative;
`;

const ContentWrapper: any = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 180px;
  flex-direction: ${({ position }: any) =>
    position === "left" ? "row-reverse" : "row"};

  @media screen and (max-width: 420px) {
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }
`;

export default function Explore() {
  const contentRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0, 0, 0, 1]
  );

  return (
    <ExploreWrapper ref={contentRef}>
      <InterSector />
      <ExploreContentWrapper style={{ scaleX: scrollYProgress }}>
        <ExploreContent>
          <StyledHeader style={{ opacity: headerOpacity }}>
            Explore My Work
          </StyledHeader>

          <CardContentWrapper>
            {!!cardsData &&
              !!cardsData.length &&
              cardsData.map((cardData) => (
                <ContentWrapper
                  key={cardData.heading}
                  position={cardData.position}
                >
                  <CardContent
                    position={cardData.position}
                    tag={cardData.tag}
                    heading={cardData.heading}
                    content={cardData.content}
                  />
                  <WorkCard img={cardData.img} />
                </ContentWrapper>
              ))}
          </CardContentWrapper>
        </ExploreContent>

        <WorkWithMe />

        <GetInTouch />

        <Footer />
      </ExploreContentWrapper>
    </ExploreWrapper>
  );
}
