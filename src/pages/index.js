import React from "react"
import {masonryOptions,GridContainer} from '../styles/containers.js'
import Layout from "../components/layout"
import Image from '../components/image.js'
import Axios from 'axios'

class IndexPage extends React.Component{

    state = { images : []}

    render(){
        return(
            <Layout>
                {/* <GridContainer
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                >
                    {this.state.images}
                </GridContainer> */}
                Home page someting nice
            </Layout>
        );
    }
};

export default IndexPage;
