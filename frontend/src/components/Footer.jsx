import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 102.7%;
  margin-top:10px;
  box-sizing: border-box; 

`;

const SocialMediaLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SocialMediaLink = styled.li`
  margin: 0 10px;
`;

const SocialMediaAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const Copyright = styled.p`
  font-size: 0.8em;
  margin-top: 10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <SocialMediaLink>
          <SocialMediaAnchor href="https://www.facebook.com/fitbuddycompany">
            <i className="fab fa-facebook-f" />
          </SocialMediaAnchor>
        </SocialMediaLink>
        <SocialMediaLink>
          <SocialMediaAnchor href="https://www.instagram.com/fitbuddycompany">
            <i className="fab fa-instagram" />
          </SocialMediaAnchor>
        </SocialMediaLink>
        <SocialMediaLink>
          <SocialMediaAnchor href="https://www.twitter.com/fitbuddycompany">
            <i className="fab fa-twitter" />
          </SocialMediaAnchor>
        </SocialMediaLink>
      </SocialMediaLinks>
      <Copyright>&copy; 2024 FitBuddy Company. All rights reserved.</Copyright>
    </FooterContainer>
  );
}