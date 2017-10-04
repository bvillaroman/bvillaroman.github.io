import styled from 'styled-components';
import Masonry from 'react-masonry-component'

export const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 10px;
    padding-left : 5px;
    padding-right : 5px;
`;

export const GridContainer = styled(Masonry)`
    margin: 0 auto;
    padding-bottom: 10px;
    padding-left : 5px;
    padding-right : 0;
`;

export const masonryOptions = {
    transitionDuration:'0.8s',
    isFitWidth : true
};
