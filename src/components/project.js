import React from "react"
import {TitleContainer, InfoContainer, DetailsContainer, ThumbnailContainer, Divider} from '../styles/components.js'
import Image from "./image"


const Project = ({ project : {details, title, id, photo, sub_headers, year, link, summary }}) => {

  console.log(photo[0])
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
        <a href={link}>
          <Image source={photo[0]}/>
        </a>
      </ThumbnailContainer>
    </React.Fragment>
  );
}

export default Project;