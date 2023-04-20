import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillsetWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  background-color: black;
  padding: 3rem 0;

  .title-wrapper {
    padding: 0 3rem 3rem 3rem;
    .title {
      background-image: linear-gradient(90deg, #b0f3f1, #ffcfdf);
      -webkit-background-clip: text;
      font-size: 36px;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const SkillsWrapper = styled(motion.div)`
  @keyframes anime1 {
    0% {
      transform: translateX(-52%);
    }

    to {
      transform: translateX(0);
    }
  }

  @keyframes anime2 {
    0% {
      transform: translateX(0);
    }

    to {
      transform: translateX(-52%);
    }
  }

  &.inner-wrapper {
    display: -webkit-box;
    gap: 20px;
    width: 100%;
  }

  &.first {
    margin-bottom: 20px;
  }

  &.front-to-back {
    animation: anime1 20s ease-in-out infinite alternate;
    :hover {
      animation-play-state: paused;
    }
  }

  &.back-to-front {
    animation: anime2 20s ease-in-out infinite alternate;
    :hover {
      animation-play-state: paused;
    }
  }
`;

export const SkillCardWrapper = styled(motion.div)`
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 2rem;
  background-color: #24273d;
  color: white;

  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  .technology {
    font-size: 16px;
  }

  .one {
    margin-bottom: 12px;
  }
`;