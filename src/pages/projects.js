import React from "react"
import {ProjectsContainer} from '../styles/containers.js'
import {TitleContainer, InfoContainer, DetailsContainer, ThumbnailContainer, Divider} from '../styles/components.js'
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
    const {title, details, thumbnail,  currentTab} = this.state;

    const labels = ["Airbnb Price Estimator", "Universal Design Compass"]

    return(
      <Layout>
          <SubNavBar currentTab={currentTab} switchSections={this.switchSections} labels={labels}/>
          <ProjectsContainer>
          <InfoContainer>
            <TitleContainer>
              {title}
              
            </TitleContainer>
            <Divider/>
            <DetailsContainer>
              <p>An Airbnb price predictor/suggester of potential/existing Airbnb listings according to:</p>
              <ul>
                  <li>Listing Details </li>
                  <li>Location</li>
                  <li>Seasonality </li> 
                  <li>Competing prices </li>
                  <li>Guest and Host reputation</li>
              </ul>
              <p>Technology Used:</p>
              <ul>
                <li>React JS with GatsbyJS</li>
                <li>AWS Lambda, AWS S3, AWS SageMaker</li>
                <li>NodeJS and MongoDB</li>
                <li>Python3 with Tensor Flow and Pandas </li>
              </ul>
            </DetailsContainer>
          </InfoContainer>
          <ThumbnailContainer>
            <img src="https://res.cloudinary.com/dyeerzayu/image/upload/c_scale,q_100,w_1000/v1562693389/Airbnb%20Thumbnail.png"/>
          </ThumbnailContainer>
          </ProjectsContainer>
      </Layout>
    );
  }
}

export default ProjectsPage;
