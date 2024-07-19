import React from 'react'
import styled from 'styled-components';
import TutoralImg from "../utils/Images/Training.webp"

const Container = styled.div`
   flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  position: relative;
  height: 60%;
  width: 100%;
  object-fit: cover;
`;
export const Tutorials = () => {
  return (
     <Container>
      <Image src={TutoralImg}/>
     </Container>
  )
}
