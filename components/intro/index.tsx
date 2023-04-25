import React from "react";
import Navbar from "shared/molecules/navbar";
import { StyledSection } from "./styles";
import IntroContent from "./intro-content";
import styled from "styled-components";
import IntroBg from 'assets/intro/intro-bg.jpeg'

export default function IntroSection() {
  return (
    <StyledSection IntroBg={IntroBg}>
      <Navbar />
      <IntroContent />

      <h6 className="scroll-tag">Scrolll Down</h6>
    </StyledSection>
  );
}
