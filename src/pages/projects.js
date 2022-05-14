import * as React from "react"
import styled from "styled-components";
import PageContainer from "../components/PageContainer";

const ProjectsPage = () => {
  return (
    <PageContainer>
      <title>Projects</title>
      <div>
	  <HeaderLine> Coming Soon </HeaderLine>
      
      </div>
    </PageContainer>
  )
}

export default ProjectsPage;

const HeaderLine = styled.h2`
  margin: 2rem auto;
  text-align: center;
  width: 100%;
`;
