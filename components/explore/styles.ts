import { motion } from "framer-motion";
import styled from "styled-components";

export const ExploreContentWrapper = styled(motion.div)`
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  transform-origin: top;
`;

export const ExploreWrapper = styled(motion.div)`
  width: 100vw;
  min-height: 180vh;
  background-color: #000;
  position: relative;
  background-image: url("https://assets.website-files.com/5e18a1cc86ccdc5d5a0d353d/5e18db68769c13be857fc990_home-stars-2.png");
`;

export const InterSector = styled(motion.div)`
  width: 6px;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 1028px){
    display: none;
  }
`;

export const StyledHeader = styled(motion.h4)`
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 420px) {
    font-size: 36px;
  }
`;

export const ExploreContent = styled(motion.div)`
  margin-top: 120vh;

  @media screen and (max-width: 420px) {
    padding: 16px;
  }
`;
