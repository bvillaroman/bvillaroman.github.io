import * as React from "react"
import styled from "styled-components";
import PageContainer from "../components/PageContainer";

const InfoPage = () => {
  return (
    <PageContainer>
      <title>Info</title>
      <Container>
        <HeaderLine>
          Abraham Bruce Villaroman (Filipino-American, b. 1996) 
        </HeaderLine>
        <SubHeaders>
          <ContactDetails>
            Brooklyn based Web Developer, actively exploring a muse between fashion and web development. 
          </ContactDetails>
          <ContactDetails>
            Email: <EmailHighlight href="mailto:bvillaroman@gmail.com">bvillaroman@gmail.com</EmailHighlight>
          </ContactDetails>
        </SubHeaders>
      </Container>
    </PageContainer>
  )
}

export default InfoPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderLine = styled.h2`
  margin: 2rem auto;
  text-align: center;
  width: 100%;
  @media(max-width: 768px) {
	   font-size: 1.5rem;
		 margin-bottom: 0; 
  }
`;

const SubHeaders = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContactDetails = styled.h1`
  width: 50%;
  @media(max-width: 768px) {
	   font-size: 1rem;
		 width: 100%;
  }
`;

const EmailHighlight = styled.a`
  font-size: 2rem;
  font-weight: 350;
  color: #FF9800;
  text-decoration: none;
  @media(max-width: 768px) {
    font-size: 1rem;
  }
`;
