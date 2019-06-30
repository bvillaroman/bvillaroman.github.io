import React from "react"
import {PhotographyContainer} from '../styles/containers.js'
import {masonryOptions,GridContainer,} from "../styles/components"
import SubNavBar from "../components/SubNavBar"
import Layout from "../components/layout"
import Image from '../components/image.js'
import Axios from 'axios'

class PhotographyPage extends React.Component{
    state = { 
      home : [],
      portraits : [],
      shoots: [],
      currentTab: 0,
    }

    switchSections = (currentTab) => { this.setState({currentTab}) }
    
    componentDidMount(){

      Axios.get(`https://res.cloudinary.com/dyeerzayu/image/list/home.json`)
          .then(response => {
              let responseImages = response.data.resources
              this.setState({ home: responseImages.map((img,key) => (<Image key={key} source={img}/>))
          })
      });

      Axios.get(`https://res.cloudinary.com/dyeerzayu/image/list/portraits.json`)
          .then(response => {
              let responseImages = response.data.resources
              this.setState({ portraits: responseImages.map((img,key) => (<Image key={key} source={img}/>))
          })
      });

      Axios.get(`https://res.cloudinary.com/dyeerzayu/image/list/shoots.json`)
          .then(response => {
              let responseImages = response.data.resources
              this.setState({ shoots: responseImages.map((img,key) => (<Image key={key} source={img}/>))
          })
      });
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

export default PhotographyPage;
