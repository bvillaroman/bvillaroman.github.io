import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

let Image = function statelessFunctionComponentClass(props) {
    let source = props.source.slice(0,61) + "c_scale,w_600/" + props.source.slice(61)

    return <ImageZoom
      image={{
        src: source,
        alt: 'Golden Gate Bridge',
        className: 'img',
        style: {
          width : `350px`,
          margin : `auto`,
          padding: `20px`,
          cursor : `pointer`,

          }
      }}
      zoomImage={{
        src: props.source,
        alt: 'Golden Gate Bridge'
      }}
    />
}

export default Image;
