import Link from "next/link";
import styled, { css } from "styled-components";

export const Content:any = styled.div`
  flex-grow: 1;

  .content-wrapper {
    max-width: 600px;
    padding-right: 75px;
    padding-left: 50px;
    text-align: right;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    .tag-name {
      color: #d9224d;
      font-size: 15px;
      line-height: 19px;
      font-weight: 700;
      margin: 20px 0 10px;
    }

    .heading {
      margin-bottom: 25px;
      font-size: 40px;
      line-height: 48px;
      color: #000;
    }

    .content {
      font-size: 16px;
      line-height: 32px;
      color: #333;
    }

    .link-wrapper{
      display:flex;
      justify-content: flex-end;
    }

    ${({position}:any)=> position=== "left" && css`
      margin-right: auto;
      text-align: left;
      margin-left: unset;
      .link-wrapper{
        justify-content: flex-start;
      }
    `}
  }

  @media screen and (max-width: 420px){
   .content-wrapper{
     max-width:360px;
     padding-right: 0;
     padding-left:0;
     text-align:left;
     .link-wrapper{
        justify-content: flex-start;
      }
   }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 20px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  font-weight: bold;

  svg{
    color: #fff;
  }

  .bg{
    position: absolute;
    height: 80%;
    width: 26px;
    left: 0;
    background-color: #d9224d;
    z-index: -1;
  }
`;