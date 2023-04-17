import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IntroContentWrap } from "./styles";
import { animatedBgVariants, contentVariants } from "./variants";
import { motion } from "framer-motion";
import contentStyles from "./intro.module.scss";

export default function IntroContent() {
  return (
    <IntroContentWrap
      variants={contentVariants}
      initial={"initial"}
      animate={"animate"}
    >
      <motion.h1 className="inline">I imagine, design & build</motion.h1>
      <motion.div  initial={"initialll"} animate={"animatee"} whileHover={"hover"} className="inline-element">
        <Link href="/">
          <h1>Web Products.</h1>
          <motion.div
            variants={animatedBgVariants}
            className="intro-animated-text-bg"
          ></motion.div>
        </Link>
      </motion.div>
      <h1 className="inline">I am</h1>
      <motion.div  initial={"initialll"} animate={"animateeTwo"} whileHover={"hover"}  className="inline-element">
        <Link href="/">
          <h1>Manikanta.</h1>
          <motion.div
            variants={animatedBgVariants}
            className="intro-animated-text-bg"
            
          ></motion.div>
        </Link>
      </motion.div>
    </IntroContentWrap>
  );
}
