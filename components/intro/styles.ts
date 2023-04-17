import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url("https://assets.website-files.com/5e18a1cc86ccdc5d5a0d353d/5ea6f258e4a9f9ebe47d31e5_homepage-hero-w3award.jpg");
  color: white;
  padding: 3rem 6rem;
  position: relative;

  .scroll-tag{
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
`;
