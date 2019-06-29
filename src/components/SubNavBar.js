import React from 'react'
import  { NavBar, Item } from '../styles/SubNavBar.js'
import Tabs from '@material-ui/core/Tabs';
import {  withStyles } from '@material-ui/core/styles';

export default () => {
  return (
    <NavBar 
      centered 
      value={0}
      variant="fullWidth"
      // scrollButtons="auto"
    >
      <Item label="Item 1"/>
      <Item label="Item 2"/>
      <Item label="Item 1"/>
      <Item label="Item 2"/>
      <Item label="Item 1"/>
      <Item label="Item 2"/>
    </NavBar>
  )
}
