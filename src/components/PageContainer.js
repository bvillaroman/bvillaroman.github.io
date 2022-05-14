import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const PageContainer = ({ children }) => (
  <Container>
    <NavBar />
    { children }
  </Container>
)

export default PageContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  font-family: -apple-system  Roboto, Helvetica Neue, sans-serif;
  @media(max-width: 768px) {
		width: 90%;
  }
`;
