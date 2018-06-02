import React from 'react';
import ImageZoom from 'react-medium-image-zoom';

let Image = function statelessFunctionComponentClass(props) {
    let thumbnail = "http://res.cloudinary.com/dyeerzayu/image/" + props.source.type + "/c_scale,w_600/v" + props.source.version + "/" + props.source.public_id + "." + props.source.format

    let source = "http://res.cloudinary.com/dyeerzayu/image/" + props.source.type + "/v" + props.source.version + "/" + props.source.public_id + "." + props.source.format

    return <ImageZoom
      image={{
        src: thumbnail,
        alt: props.source.public_id,
        className: 'img',
        style: {
          width : `350px`,
          margin : `auto`,
          padding: `20px`,
          cursor : `pointer`,

          }
      }}
      zoomImage={{
        src: source,
        alt: props.source.public_id
      }}
    />
}

export default Image;
