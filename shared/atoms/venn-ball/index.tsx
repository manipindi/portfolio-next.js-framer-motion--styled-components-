import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Circle: any = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: rgba(217, 34, 77, 0.59);
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.48);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 420px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (min-width: 1900px) {
    width: 350px;
    height: 350px;
    font-size: 24px;
  }
`;

export default function VennBall({ children, ...rest }: any) {
  return <Circle {...rest}>{children}</Circle>;
}
