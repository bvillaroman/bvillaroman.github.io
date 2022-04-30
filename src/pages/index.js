import * as React from "react"
import styled from "styled-components";
import PageContainer from '../components/PageContainer';
import Link from "gatsby-link";

const IndexPage = () => {
  return (
    <PageContainer>
      <title>bvillaroman</title>
      <Container>
        <h1>Designer, developer & friend.</h1>
        <h3>I design and code beautiful web applications.</h3>
        <br/>
        <h2>Have a business, idea or project in mind?</h2>
        <h2>Let's have a <HeaderHighlight to="/info">conversation</HeaderHighlight>.</h2>
      </Container>
    </PageContainer>
  )
}

export default IndexPage;

const HeaderHighlight = styled(Link)`
  font-size: 2rem;
  font-weight: 350;
  color: #FF9800;
  text-decoration: none;
  @media(max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const Container = styled.div`   
  width: 100%;
  h1 {
      font-size: 3rem;
  };
  h2 {
      font-size: 2rem;
      font-weight: 350;
  };
  h3 {
      font-size: 1.8rem;
      font-weight: 300;
      color: rgba(0,0,0,0.55)
  };
  margin: 10% auto;
  @media(max-width: 768px) {
      h1 {
          font-size: 2.0rem;
      };
      h2 {
          font-size: 1.3rem;
          font-weight: 350;
      };
      h3 {
          font-size: 1.2rem;
          font-weight: 300;
          color: rgba(0,0,0,0.55)
      };
  }
`;