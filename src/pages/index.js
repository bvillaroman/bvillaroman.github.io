import React from "react"
import {masonryOptions,GridContainer, Container} from '../styles/containers.js'
import Image from '../components/image.js'
import Axios from 'axios'

class IndexPage extends React.Component{
    state = { images : []}
    createImage = (img) => (<Image source={img}/>)

    componentDidMount(){
        Axios.get("https://res.cloudinary.com/dyeerzayu/image/list/home.json")
            .then(response => {
                let responseImages = response.data.resources
                this.setState({ images: responseImages.map( this.createImage )
            })
        });
    }
    render(){
        return(
            <Container>
                <GridContainer
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

export default IndexPage;
