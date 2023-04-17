import TextBox from "@/shared/atoms/text-box";
import React, { useEffect, useRef, useState } from "react";
import { Intersector } from "..";
import { useScroll, useTransform } from "framer-motion";
import {motion} from 'framer-motion'

export default function InfoContent() {
    const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef
  });  

  return (
    <motion.div ref={contentRef} style={{paddingTop:"15rem", paddingBottom:"6rem"}}> 
      <Intersector style={{scaleY:scrollYProgress}}/>
      <TextBox
        boxDirections={[600, 800]}
        animate={"visibleleft"}
        direction="left"
      >
        <h4>
          We have the expertise of a traditional agency with the agility of a
          startup.
        </h4>
      </TextBox>
      <TextBox
        boxDirections={[900, 1100]}
        animate={"visibleright"}
        direction="right"
        style={{ textAlign: "left" }}
      >
        <h4>No nonsense. Just great products and great people.</h4>
      </TextBox>

      <TextBox
        boxDirections={[1200, 1400]}
        animate={"visibleleft"}
        direction="left"
      >
        <h4>Our partners feel the difference and our work shows it.</h4>
      </TextBox>

      <TextBox
        boxDirections={[1500, 1700]}
        animate={"visibleright"}
        direction="right"
        style={{ textAlign: "left" }}
      >
        <h4>Let&apos;s ditch the rule book together.</h4>
      </TextBox>
    </motion.div>
  );
}
