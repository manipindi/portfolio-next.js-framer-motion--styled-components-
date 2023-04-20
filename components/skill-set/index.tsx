import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaReact, FaCss3, FaBootstrap } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandFramerMotion,
} from "react-icons/tb";
import {
  SiReduxsaga,
  SiChakraui,
  SiStyledcomponents,
  SiTypescript,
  SiStorybook,
  SiMui,
} from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { BiAtom } from "react-icons/bi";
import { SkillCardWrapper, SkillsWrapper, SkillsetWrapper } from "./styles";

const skillsSet1 = [
  { icon: <TbBrandNextjs />, technology: "Next JS" },
  { icon: <FaReact />, technology: "React JS" },
  { icon: <TbBrandRedux />, technology: "Redux" },
  { icon: <FaReact />, technology: "Recoil JS" },
  { icon: <TbBrandFramerMotion />, technology: "Framer Motion" },
  { icon: <TbBrandRedux />, technology: "Redux Thunk" },
  { icon: <SiReduxsaga />, technology: "Redux Saga" },
  { icon: <SiChakraui />, technology: "Chakra UI" },
];

const skillsSet2 = [
  { icon: <BiAtom />, technology: "Atomic Design" },
  { icon: <SiStyledcomponents />, technology: "Styled Components" },
  { icon: <SiTypescript />, technology: "Typescript" },
  { icon: <SiStorybook />, technology: "Storybook" },
  { icon: <SiMui />, technology: "Material UI" },
  { icon: <DiNpm />, technology: "NPM" },
  { icon: <FaCss3 />, technology: "CSS3" },
  { icon: <FaBootstrap />, technology: "Bootstrap" },
];

function SkillCard({ skill }: any) {
  return (
    <SkillCardWrapper>
      <div style={{ fontSize: 40 }}>{skill?.icon}</div>
      <div style={{ textAlign: "center" }}>
        <p className="technology one">{skill?.technology}</p>
        <p className="technology">Empowering Future with {skill?.technology}</p>
      </div>
    </SkillCardWrapper>
  );
}

export default function SkillSetComposition() {
  return (
    <SkillsetWrapper>
      <div className="title-wrapper">
        <h5 className="title">A Little Info About my Skills</h5>
      </div>
      <SkillsWrapper className="inner-wrapper first front-to-back">
        {skillsSet1 &&
          skillsSet1.length &&
          skillsSet1.map((skill) => <SkillCard key={skill.technology} skill={skill} />)}
      </SkillsWrapper>

      <SkillsWrapper className="inner-wrapper back-to-front">
        {skillsSet2 &&
          skillsSet2.length &&
          skillsSet2.map((skill) => <SkillCard key={skill.technology} skill={skill} />)}
      </SkillsWrapper>
    </SkillsetWrapper>
  );
}
