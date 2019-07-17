import React from "react"
import {TitleContainer, InfoContainer, DetailsContainer, ThumbnailContainer, Divider} from '../styles/components.js'

const Project = ({ details, title, id, photos, sub_headers, year, link, summary}) => {
    // console.log(this.props);
  return(
    <div>
      <InfoContainer>
        <TitleContainer>
          {title}     
        </TitleContainer>
        <Divider/>
        <DetailsContainer>
          summary
        </DetailsContainer>
      </InfoContainer>
      
      <ThumbnailContainer>

      </ThumbnailContainer>
    </div>
  );
}

export default Project;