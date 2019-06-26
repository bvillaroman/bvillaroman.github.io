import styled from 'styled-components';
import Masonry from 'react-masonry-component'

export const NavBarContainer = styled.div`
    width: 80%;
    height: 14% !important;
    margin: 0.5rem auto;
    text-align: center;
`;
export const SubNavBarContainer = styled.div`
    position: relative;
    border: 1px solid blue;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 10px;
    font-weight: 900px;
    justify-content : 'center';
    align-tems: 'center';
    border: 1px solid orange;
`;

export const AboutContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    padding-bottom: 10px;
    font-weight: 900px;
    justify-content : 'center';
    align-tems: 'center'
`;

export const GridContainer = styled(Masonry)`
    position: relative;
    display: table;
    margin: 0 auto;
    padding-bottom: 10px;
    justify-content : 'center';
    align-items: 'center';
`;

export const masonryOptions = {
    transitionDuration:'0.8s',
    isFitWidth : true
};

export const Background = styled.div`
    margin : 0 auto;
    text-align : center;
    background-color:orange;
    position: fixed;
    left : 10vw;
    width : 80vw;
    top : 30vh;
    height : 10vh;
    z-index:-99;
    background-size : 80%;
    background-repeat: no-repeat;
    background-position:center;

`;
