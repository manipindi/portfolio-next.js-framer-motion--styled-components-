import React from "react";
import styled, { css } from "styled-components";

const CardWrap: any = styled.div`
  width: 680px;
  height: 620px;
  background-size: cover;

  ${({ bgposition }: any) =>
    bgposition &&
    css`
      background-position: ${bgposition};
    `}

  ${({ bgImg }: any) =>
    bgImg &&
    css`
      background-image: url(${bgImg?.src});
    `}

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 360px;
  }
`;

export default function WorkCard({ img, bgposition }: any) {
  return <CardWrap bgposition={bgposition} bgImg={img}></CardWrap>;
}
