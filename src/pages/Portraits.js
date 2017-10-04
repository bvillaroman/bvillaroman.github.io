import React from 'react'
import Link from 'gatsby-link'
import {masonryOptions,GridContainer} from '../styles/Container.js'
import Image from '../styles/Image.js'
import data from '../data.json'

class Portraits extends React.Component{
  constructor(props){
      super(props);
      this.images = [];
  }

  createImage(image){
     return <Image source ={image}/>
  }

  render(){
      for(var i = 0; i < data.portraits.length; i++) this.images.push(this.createImage(data.portraits[i] ))

      return(
          <GridContainer
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            style = {{paddingLeft : 15,
                      paddingRight : 15}}
          >
                    {this.images}
          </GridContainer>
      );
  }


};

export default Portraits
