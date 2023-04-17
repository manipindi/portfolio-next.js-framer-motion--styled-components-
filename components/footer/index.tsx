import React from "react";
import styled from "styled-components";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import Link from "next/link";

const FooterContainer = styled.div`
  padding: 75px 49px;
  background-color: aliceblue;

  .name{
    margin-bottom: 10px;
  }

  .divider{
    border-top: 1px solid gray;
    margin-top: 30px;
  }

  .footer-items {
    display: flex;
    gap: 60px;
    .footer-wrapper {
      .composition {
        margin-top: 20px;
        display: flex;
        gap: 20px;

        .group {
          display: flex;
          gap: 4px;
          flex-direction: column;

          .plan{
            color: #000;
            margin-bottom: 10px;
            font-size: 20px;
          }

          a{
            text-decoration: none;
            color: #000;
            margin-bottom: 10px;
            font-size: 20px;
          }
        }
      }
    }
    .me{
      margin-right: 80px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <h2 className="name">Manikanta Pindi</h2>

      <div className="footer-items">
        <div className="footer-wrapper" style={{flex:1}}>
          <div className="composition">
            <BiHomeAlt style={{fontSize:"24px"}}/>
            <div className="group">
              <span className="plan">Gachibowli</span>
              <span className="plan">Hyderabad</span>
              <span className="plan">500032</span>
            </div>
          </div>

          <div className="composition">
            <BiPhone style={{fontSize:"24px"}}/>
            <div className="group">
              <span className="plan">8332801878</span>
            </div>
          </div>
        </div>

        <div className="footer-wrapper">
          <div className="composition">
            <div className="group">
              <Link href={'/'}>About</Link>
              <Link href={'/'}>Work</Link>
              <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Contact</Link>
            </div>
          </div>
        </div>

        <div className="footer-wrapper me">
          <div className="composition">
            <div className="group">
              <span className="plan">Careers</span>
              <span className="plan">Projects</span>
              <span className="plan">Technologies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      
    </FooterContainer>
  );
}
