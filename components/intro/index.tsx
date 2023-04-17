import React from "react";
import Navbar from "shared/molecules/navbar";
import { StyledSection } from "./styles";
import IntroContent from "./intro-content";
import styled from "styled-components";

export default function IntroSection() {
  return (
    <StyledSection>
      <Navbar />
      <IntroContent />

      <h6 className="scroll-tag">Scrolll Down</h6>
    </StyledSection>
  );
}
