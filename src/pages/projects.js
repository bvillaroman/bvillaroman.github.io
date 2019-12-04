import React from "react"
import {ProjectsContainer} from '../styles/containers.js'
import SubNavBar from "../components/SubNavBar"
import Layout from "../components/layout"
import Project from "../components/project"
import { graphql } from 'gatsby'

class ProjectsPage extends React.Component{
  state = { 
    projects : [],
    currentTab: 0,
  }

  switchSections = (currentTab) => { this.setState({currentTab}) }
  
  componentDidMount(){
    const projects = this.props.data.bvillaroman.project.map((project) => {
      return (
        <Project project={project} />
      )
    });

    this.setState({ projects })
  }


  render(){
    const {currentTab, projects} = this.state;

    // const labels = this.props.data.bvillaroman.project.map((project) => (project.title))

    const labels = [this.props.data.bvillaroman.project[1].title]
    // console.log(this.props);
    return(
      <Layout>
          <SubNavBar currentTab={currentTab} switchSections={this.switchSections} labels={labels}/>
          <ProjectsContainer>
            {projects[1]}
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
        id
        photo
        title
        year
        summary
        link
        subheaders
      }
    }
  }
`

export default ProjectsPage;

