import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 310px;
  color: white;
  font-size: 28px;
  text-align: right;
  font-weight: 300;
  margin-bottom: 300px;

  @media screen and (max-width: 420px) {
    width: 300px;
    font-size: 22px;
    text-align: center;
    margin-bottom: 100px;
    /* transform: none !important; */
  }
`;

const boxVariants = {
  visibleleft: {
    scale: 1.3,
    transition: {
      duration: 0.7,
    },
  },
  visibleright: {
    scale: 1.3,
    transition: {
      duration: 0.7,
    },
  },
};

export default function TextBox({
  children,
  direction,
  boxDirections,
  scrollYProgress,
  positions,
  values,
  crosVal,
  ...rest
}: any) {
  const { style } = rest;

  const scrollXVal = useTransform(scrollYProgress, positions, values);

  const opacity = useTransform(scrollYProgress, positions, [0, 1]);

  let crosValues;
  if (crosVal) {
    console.log(crosVal);
    
    crosValues = useTransform(scrollYProgress, positions, crosVal);
  }

  return (
    <Box
      style={{
        ...style,
        x: scrollXVal,
        opacity,
        left: crosValues,
      }}
    >
      {children}
    </Box>
  );
}
