import React from "react"
import {ProjectsContainer} from '../styles/containers.js'
import {TitleContainer} from '../styles/components.js'
import SubNavBar from "../components/SubNavBar"
import Layout from "../components/layout"
class ProjectsPage extends React.Component{
  state = { 
    title : "",
    details : "",
    thumbnail: "",
    currentTab: 0,
  }

  switchSections = (currentTab) => { this.setState({currentTab}) }
  
  componentDidMount(){
    this.setState({
      title: " Airbnb Price Estimator",
      details: "details about the app",
      thumbnail: "thumbnail"
    })
  }


  render(){
    const {title, details, tbumbnail,  currentTab} = this.state;

    const labels = ["Airbnb Price Estimator", "Universal Design Compass"]

    return(
      <Layout>
          <SubNavBar currentTab={currentTab} switchSections={this.switchSections} labels={labels}/>
          <ProjectsContainer>
            <TitleContainer>
              {title}
            </TitleContainer>
          </ProjectsContainer>
      </Layout>
    );
  }
}

export default ProjectsPage;
