import styled from 'styled-components';
import Masonry from 'react-masonry-component'

export const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 10px;
`;

export const GridContainer = styled(Masonry)`
    margin: 0 auto;
    padding-bottom: 10px;

`;

export const masonryOptions = {
    transitionDuration:'0.8s',
    isFitWidth : true
};
