import React from "react"
import {ProjectsContainer} from '../styles/containers.js'
import {TitleContainer, InfoContainer, DetailsContainer, ThumbnailContainer, Divider} from '../styles/components.js'
import SubNavBar from "../components/SubNavBar"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

class ProjectsPage extends React.Component{
  state = { 
    projects : [],
    currentTab: 0,
  }

  switchSections = (currentTab) => { this.setState({currentTab}) }
  
  componentDidMount(){
    const projects = this.props.data.bvillaroman.project;
    console.log(projects)
  }


  render(){
    const {currentTab} = this.state;

    const labels = ["Airbnb Price Estimator", "Universal Design Compass"]

    // console.log(this.props);
    return(
      <Layout>
          <SubNavBar currentTab={currentTab} switchSections={this.switchSections} labels={labels}/>
          <ProjectsContainer>
          <InfoContainer>
            <TitleContainer>
              
              
            </TitleContainer>
            <Divider/>
            <DetailsContainer>
              
            </DetailsContainer>
          </InfoContainer>

          <ThumbnailContainer>

          </ThumbnailContainer>

          </ProjectsContainer>
      </Layout>
    );
  }
}

export const query = graphql`
  query Projects {
    bvillaroman {
      project {
        details
        title
        id
        photos
        sub_headers
        year
        link
        summary
      }
    }
  }
`

export default ProjectsPage;

