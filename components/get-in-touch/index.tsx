import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100vw;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 420px){
    min-height: 70vh;
  }
`;

const Content = styled(motion.div)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tag {
    color: #d9224d;
    font-size: 15px;
    line-height: 19px;
    margin: 20px 0 10px;
    text-transform: uppercase;
  }
  .heading {
    margin: 20px 0 10px;
    color: #000;
    font-size: 50px;
    line-height: 60px;
    font-weight: 400;
  }
  .get-in-touch-btn {
    padding: 10px 16px;
    background-color: #d9224d;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 56px;
  }

  @media screen and (max-width: 420px){
    .tag{
      font-size: 12px;
    }
    .heading{
      font-size: 36px;
    }
    .get-in-touch-btn{
      margin-top: 36px;
    }
  }
`;

const itemVariants = {
  iInitial: {
    opacity: 0,
    y: 100,
  },
  iAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function GetInTouch() {
  return (
    <Container>
      <Content>
        <motion.h2
          initial={"iInitial"}
          whileInView={"iAnimate"}
          // transition={{ duration: 0.5 }}
          variants={itemVariants}
          viewport={{ once: true }}
          className="tag"
        >
          Ready to Create Something amazing
        </motion.h2>
        <motion.h1
          initial={"iInitial"}
          whileInView={"iAnimate"}
          viewport={{ once: true }}
          className="heading"
          variants={itemVariants}
        >
          Let&apos;s Work Together
        </motion.h1>

        <motion.button
          initial={"iInitial"}
          whileInView={"iAnimate"}
          viewport={{ once: true }}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          className="get-in-touch-btn"
        >
          Get In Touch
        </motion.button>
      </Content>
    </Container>
  );
}
