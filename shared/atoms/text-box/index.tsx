import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 310px;
  color: white;
  font-size: 28px;
  text-align: right;
  font-weight: 300;
  margin-bottom: 300px;
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
  ...rest
}: any) {
  const { animate, style } = rest;
  const { scrollY } = useScroll();
  const x = useTransform(
    scrollY,
    boxDirections ? boxDirections : [0, 0],
    direction === "left"
      ? [0, 250]
      : direction === "right"
      ? [1000, 880]
      : [0, 250]
  );
  const opacity = useTransform(
    scrollY,
    boxDirections ? boxDirections : [0, 0],
    [0, 1]
  );

  return (
    <Box
      style={{ translateX: x, opacity: opacity, ...style }}
      variants={boxVariants}
      animate={animate}
    >
      {children}
    </Box>
  );
}
