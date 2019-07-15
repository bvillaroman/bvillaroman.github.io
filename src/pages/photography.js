import React from "react"
import {PhotographyContainer} from '../styles/containers.js'
import {masonryOptions,GridContainer,} from "../styles/components"
import SubNavBar from "../components/SubNavBar"
import Layout from "../components/layout"
import Image from '../components/image.js'
import Axios from 'axios'
import { graphql } from 'gatsby'

class PhotographyPage extends React.Component{
    state = { 
      home : [],
      portraits : [],
      shoots: [],
      currentTab: 0,
    }

    switchSections = (currentTab) => { this.setState({currentTab}) }
    
    componentDidMount(){

      const photos = this.props.data.bvillaroman.photos;

      const home      = photos.map((img,key) => { if(img.category === "home") return (<Image key={key} source={img}/>)})
      const portraits = photos.map((img,key) => { if(img.category === "portraits") return (<Image key={key} source={img}/>)})
      const shoots    = photos.map((img,key) => { if(img.category === "shoots") return (<Image key={key} source={img}/>)})

      this.setState({ home,portraits,shoots })

    }
    render(){
      const {portraits, shoots, home, currentTab} = this.state;
      const images = currentTab === 0 ? home
                  :  currentTab === 1 ? portraits
                  :  currentTab === 2 ? shoots
                  :  home;

      const labels = ["Home", "Portraits", "Shoots"]

      return(
        <Layout>
            <SubNavBar currentTab={currentTab} switchSections={this.switchSections} labels={labels}/>
            <PhotographyContainer>
              <GridContainer
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {images}
              </GridContainer>
            </PhotographyContainer>
        </Layout>
      );
    }
};

export const query = graphql`
  query Photos {
    bvillaroman {
      photos {
        category
        created_at
        format
        height
        public_id
        width
        version
        type
      }
    }
  }
`

export default PhotographyPage;
