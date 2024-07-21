import React from "react";
import styled from "styled-components";
import Contactimg from "../utils/Images/Contact.webp";
import HeaderImage from "../utils/Images/Profile.jpg"; 
import Footer from "../components/Footer";
import ContactImg from "../utils/Images/Contact.webp";
const Container = styled.div`
  flex: 1;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  margin-top:-190px
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Move the image to the background */
`;

const HeaderImageWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center; /* Add this to center the image */
`;

const HeaderImageStyled = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  color: white;
  padding: 10px;
`;

const HeadingTwo = styled.h1`
  color: red;
  padding: 10px;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

const Input = styled.input`
  width: 95%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  ::placeholder {
    color: #ccc;
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  resize: vertical;
  ::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: pink;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  :hover {
    background: #ff69b4;
  }
`;

const Image2 = styled.img`
  position: relative;
  height: 60%;
  width: 100%;
  object-fit: cover;
`;
export const Contact = () => {
  return (
    <Container>
      <Container>
      <Image2 src={ContactImg}/>
     </Container>
      <ContentWrapper>
        <Image src={Contactimg} />
        <HeadingWrapper>
          <Heading>CONNECT WITH </Heading>
          <HeadingTwo>FitBuddy COMPANY</HeadingTwo>
        </HeadingWrapper>
        <FormWrapper>
          <HeaderImageWrapper>
            <HeaderImageStyled src={HeaderImage} alt="Header Image" /> 
            <HeaderTitle>We are here to help</HeaderTitle>
          </HeaderImageWrapper>
          <h2>Get in Touch</h2>
          <form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="phone" placeholder="Phone" />
            <TextArea placeholder="Message" />
            <Button>Send</Button>
          </form>
        </FormWrapper>
        <Footer />
      </ContentWrapper>
    </Container>
  );
};