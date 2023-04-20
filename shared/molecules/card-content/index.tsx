import React from "react";
import { Content, StyledLink } from "./styles";
import { BsChevronRight } from "react-icons/bs";

type cardContentProps = {
  tag?: string;
  heading?: string;
  content?: string;
  position?: string;
};

export default function CardContent({
  tag,
  heading,
  content,
  position,
}: cardContentProps) {
  return (
    <Content position={position}>
      <div className="content-wrapper">
        <h1 className="tag-name">{tag}</h1>
        <h3 className="heading">{heading}</h3>
        <h6 className="content">{content}</h6>

        <div className="link-wrapper">
          <StyledLink href="/">
            <BsChevronRight />
            <span>See More</span>
            <div className="bg"></div>
          </StyledLink>
        </div>
      </div>
    </Content>
  );
}
