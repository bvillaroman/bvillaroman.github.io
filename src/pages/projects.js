import React from "react"
import {masonryOptions,GridContainer} from '../styles/containers.js'
import Layout from "../components/layout"
import Image from '../components/image.js'
import Axios from 'axios'

class ProjectsPage extends React.Component{
    state = { 
      section : "",
      images : []
    }
    
    componentDidMount(){

      const section = this.state.section === "" ? "home" : this.state.section;

      Axios.get(`https://res.cloudinary.com/dyeerzayu/image/list/${section}.json`)
          .then(response => {
              let responseImages = response.data.resources
              this.setState({ images: responseImages.map((img) => (<Image source={img}/>))
          })
      });
    }
    render(){
        return(
          <Layout>
              <GridContainer
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                >
                  {this.state.images}
              </GridContainer>
          </Layout>
        );
    }
};

export default ProjectsPage;
