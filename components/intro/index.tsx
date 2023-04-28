import React from "react";
import Navbar from "shared/molecules/navbar";
import { StyledSection } from "./styles";
import IntroContent from "./intro-content";
import { motion } from "framer-motion";
import IntroBg from "assets/intro/intro-bg.jpeg";

const IntroVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    when: "beforeChildren",
    delayChildren: 0.8,
    staggerChildren: 1,
  },
};

const scrollVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function IntroSection() {
  return (
    <StyledSection
      IntroBg={IntroBg}
      variants={IntroVariants}
      initial={"hidden"}
      animate={"visible"}
    >
      <motion.h6 className="scroll-tag" variants={scrollVariant}>
        Scrolll Down
      </motion.h6>
      <Navbar />
      <IntroContent />
    </StyledSection>
  );
}
