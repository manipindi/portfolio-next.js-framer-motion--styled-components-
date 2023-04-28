import Image from "next/image";
import React from "react";
import Icon from "assets/intro/page-icon.svg";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media screen and (min-width: 1900px) {
    .icon {
      width: 80px;
      height: 80px;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledDiv>
      <Image src={Icon} className="icon" alt="icon-logo" />
    </StyledDiv>
  );
}
