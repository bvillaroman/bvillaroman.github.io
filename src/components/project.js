import React from "react"
import {TitleContainer, InfoContainer, DetailsContainer, ThumbnailContainer, Divider} from '../styles/components.js'

const Project = ({ project : {details, title, id, photos, sub_headers, year, link, summary }}) => {
  return(
    <React.Fragment>
      <InfoContainer>
        <TitleContainer>
          {title}     
        </TitleContainer>
        <Divider/>
        <DetailsContainer>
          {year}
        </DetailsContainer>
      </InfoContainer>
      
      <ThumbnailContainer>

      </ThumbnailContainer>
    </React.Fragment>
  );
}

export default Project;