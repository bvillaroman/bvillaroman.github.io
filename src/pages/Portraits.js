import React from 'react'
import {masonryOptions,GridContainer} from '../styles/Container.js'
import Image from '../components/Image.js'
import Axios from 'axios'

class Portraits extends React.Component{
    state = { images : [] }

    createImage(image){  return <Image source={image}/> }

    componentDidMount(){
        Axios.get("https://res.cloudinary.com/dyeerzayu/image/list/portraits.json")
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

export default Portraits
