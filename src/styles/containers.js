import styled from 'styled-components';

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
`;

export const ProjectsContainer = styled(Container)`
`;
