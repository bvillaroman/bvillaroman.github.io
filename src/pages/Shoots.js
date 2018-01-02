import React from 'react'
import Link from 'gatsby-link'
import Image from '../styles/Image.js'
import data from '../data.json'
import { Grid,Row,Col} from 'react-bootstrap';
import {masonryOptions,GridContainer} from '../styles/Container.js'

var divStyle = { paddingBottom : '50px' }

class Shoots extends React.Component{
  /*createImage(image,orientation) {
    return <Image source={image} orientation = {orientation} />;
  }

  createRow1(row){
    return (
            <Row className="show-grid">
                <Col xs = {4}>
                    {this.createImage(row.images[0],"portrait")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[1],"landscape")}
                    {this.createImage(row.images[2],"landscape")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[3],"portrait")}
                </Col>
            </Row>
    );
  }
  createRow2(row){
    return (
            <Row className="show-grid">
                <Col xs = {4}>
                    {this.createImage(row.images[0],"landscape")}
                    {this.createImage(row.images[1],"landscape")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[2],"portrait")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[3],"landscape")}
                    {this.createImage(row.images[4],"landscape")}
                </Col>
            </Row>

    );
  }
  createRow3(row){
    return (
            <Row className="show-grid">
                <Col xs = {4}>
                    {this.createImage(row.images[0],"portrait")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[1],"portrait")}
                </Col>

                <Col xs = {4}>
                    {this.createImage(row.images[2],"portrait")}
                </Col>
            </Row>
    );
  }

  createRows(rows){
      if(rows.type === 1) return this.createRow1(rows)
      else if(rows.type === 2) return this.createRow2(rows)
      else return this.createRow3(rows)
  }

  render(){
    var rows = []
    for(var i = 0; i < data.shoots.length; i++) rows.push(this.createRows(data.shoots[i]));

    return (
      <Grid fluid = "true">  {rows} </Grid>
    );
  }
*/


constructor(props){
    super(props);
    this.images = [];
}

createImage(image){
   return <Image source ={image}/>
}

render(){
    for(var i = 0; i < data.shoots.length; i++) this.images.push(this.createImage(data.shoots[i] ))

    return(
        <GridContainer
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          
        >
                  {this.images}
        </GridContainer>
    );
}

};

export default Shoots
