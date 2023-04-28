import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledSection: any = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 3rem 6rem;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  ${({ IntroBg }: any) =>
    IntroBg &&
    css`
      background-image: url(${IntroBg?.src});
    `}

  .scroll-tag {
    position: absolute;
    bottom: 50px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 70px;
  }

  .box {
    width: 200px;
    height: 80px;
    border-radius: 50px;
    background-color: white;
  }

  @media screen and (max-width: 420px) {
    padding: 32px;
  }

  @media screen and (max-width: 700px) and (orientation: landscape) {
    padding: 2rem 4rem;
  }
`;
