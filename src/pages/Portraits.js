import React from 'react'
import {masonryOptions,GridContainer,Container} from '../styles/containers.js'
import Image from '../components/image.js'
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
            <Container>
                <GridContainer
                    className={'my-gallery-class'}
                    elementType={'ul'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    {this.state.images}
                </GridContainer>
            </Container>
        );
    }


};

export default Portraits
