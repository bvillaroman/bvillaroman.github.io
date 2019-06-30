import React from 'react'
import  { NavBar, Item } from '../styles/components'

export default ({currentTab, labels, switchSections}) => {
  return (
    <NavBar 
      centered 
      value={currentTab}
      // variant="fullWidth"
    >
      {
        labels.map((label,key) => {
          return( <Item label={label} key={key} onClick={(evt) => { switchSections(key)}}/>)
        })
      }
    </NavBar>
  )
}
