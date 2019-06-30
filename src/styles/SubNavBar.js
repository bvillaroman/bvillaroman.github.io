import React from 'react'
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {  withStyles } from '@material-ui/core/styles';

// Sub Nav Bar Container

export const NavBarJS = withStyles({
  indicator: {
    display: 'flex',
    '& > div': {
      width: '100%',
      backgroundColor: '#FF9800',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const NavBar = styled(NavBarJS)`
  && {
   width: 80%;
   margin: 0 auto;
  }
`;

export const Item = styled(Tab)`
  && {
    opacity: 1;
    margin: 0 auto;
    text-decoration: none;
    text-transform: none;
  }
`;