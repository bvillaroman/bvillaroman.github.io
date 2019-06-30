import styled from 'styled-components';
import Masonry from 'react-masonry-component'

export const NavBarContainer = styled.div`
    width: 80%;
    height: 14% !important;
    margin: 0.5rem auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    // text-align: center;
`;

export const LandingContainer = styled.div`   
    width: 80%;
    h1 {
        font-size: 3rem;
    };
    h2 {
        font-size: 2rem;
        font-weight: 350;
    };
    h3 {
        font-size: 1.8rem;
        font-weight: 300;
        color: rgba(0,0,0,0.55)
    };
    margin: 10% auto;
    @media(max-width: 768px) {
        h1 {
            font-size: 2.0rem;
        };
        h2 {
            font-size: 1.3rem;
            font-weight: 350;
        };
        h3 {
            font-size: 1.2rem;
            font-weight: 300;
            color: rgba(0,0,0,0.55)
        };
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    // width: 80%;
    // border: 1px solid orange;
    font-family: -apple-system  Roboto, Helvetica Neue, sans-serif;
`;

export const ContactContainer = styled(LandingContainer)`   
`;

export const PhotographyContainer = styled(Container)`
    width: 100%;
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
