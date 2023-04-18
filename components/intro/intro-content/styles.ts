import { motion } from "framer-motion";
import styled from "styled-components";

export const IntroContentWrap = styled(motion.div)`
  width: 550px;
  margin-top: 8rem;
  font-size: 36px;
  line-height: 60px;
  .inline {
    display: inline;
  }
  .inline-element {
    position: relative;
    display: inline-block;
    padding: 0 20px;
    z-index: 0;
    a {
      text-decoration: none;
      color: #fff;
    }
    .intro-animated-text-bg {
      position: absolute;
      width: 90%;
      height: 10px;
      background-color: #25adff;
      bottom: 8px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 420px){
    width: auto;
    font-size: 21px;
    line-height: 50px;
    text-align: center;

    .inline-element{
      padding: 0 13px;
    }
  }
  @media screen and (max-width: 380px){
    font-size: 19px;
    .inline-element{
      padding: 0 11px;
    }
  }
`;
