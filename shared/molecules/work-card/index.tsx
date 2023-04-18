import React from "react";
import styled from "styled-components";

const CardWrap: any = styled.div`
  width: 680px;
  height: 620px;
  background-image: url(${({ bgImg }: any) => bgImg});
  background-size: cover;

  @media screen and (max-width: 420px){
    width: 100%;
    height: 360px;
  }
`;

export default function WorkCard({ img }: any) {
  return <CardWrap bgImg={img}></CardWrap>;
}
