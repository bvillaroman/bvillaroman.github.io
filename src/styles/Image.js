import {Landscape,Portrait,MasonryImage} from './image.style.js'
import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
    let source = props.source.slice(0,61) + "c_scale,w_600/" + props.source.slice(61)
    if(props.orientation === 'p'){
      return <Portrait src = {source}/>
    }
    else if(props.orientation === 'l'){
      return <Landscape src = {source}/>
    }
    else return <MasonryImage src = {source}/>
}

export default Image;
