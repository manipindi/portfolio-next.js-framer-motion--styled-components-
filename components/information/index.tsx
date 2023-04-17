import TextBox from "@/shared/atoms/text-box";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import InfoContent from "./info-content";
import Explore from "../explore";

const InformationWrapper = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  background-color: #000;
  z-index: 0;
  position: relative;
  background-image: url("https://assets.website-files.com/5e18a1cc86ccdc5d5a0d353d/5e18db68769c13be857fc990_home-stars-2.png");
`;
const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: -1;
`;

export const Intersector = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 6px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15rem;
  background-color: white;
  transform-origin: top;
  z-index: 10;
`;

export default function Information() {
  const { scrollY } = useScroll();
  const scaleIM = useTransform(
    scrollY,
    [0, 50, 100, 200, 300, 400, 500, 600],
    [1, 2, 3, 4, 5, 7, 9, 12]
  );

  return (
    <InformationWrapper>
      <Circle style={{ scale: scaleIM }} />
      <InfoContent />
    </InformationWrapper>
  );
}
