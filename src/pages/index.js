import React from 'react'
import Link from 'gatsby-link'
import {masonryOptions,GridContainer} from '../styles/Container.js'
import Image from '../styles/Image.js'
import Axios from 'axios'

class IndexPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images : [],
        }
    }

    createImage(image){ return <Image source ={image} /> }

    componentDidMount(){
        Axios.get("http://res.cloudinary.com/dyeerzayu/image/list/home.json")
        .then(response => {
            let responseImages = response.data.resources
            this.setState({
                images: responseImages.map( this.createImage )
            })
        });
    }
    render(){
        return(
            <GridContainer
                className={'my-gallery-class'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                        {this.state.images}
            </GridContainer>
        );
    }
};

export default IndexPage
