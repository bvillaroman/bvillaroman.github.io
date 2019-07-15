import React from 'react';
import {ImageItem} from '../styles/components';

const Image = (props) => {
    const thumbnail = "https://res.cloudinary.com/dyeerzayu/image/" + props.source.type + "/c_scale,w_600/v" + props.source.version + "/" + props.source.public_id + "." + props.source.format

    const source = "https://res.cloudinary.com/dyeerzayu/image/" + props.source.type + "/v" + props.source.version + "/" + props.source.public_id + "." + props.source.format
    return (
      <ImageItem
        image={{
          src: thumbnail,
          alt: props.source.public_id,
          className: 'img',
          style: {
            width : `260px`,
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
    )
}

export default Image;
