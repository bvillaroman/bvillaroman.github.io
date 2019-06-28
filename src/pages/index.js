import React from "react"
import Layout from "../components/layout"
import {LandingContainer} from "../styles/containers"
import {HeaderHighlight} from "../styles/components"

class IndexPage extends React.Component{

    state = { images : []}

    render(){
        return(
            <Layout>
                <LandingContainer>
                    <h1>Designer, Developer & Friend.</h1>
                    <h3>I design and code beautiful web applications.</h3>

                    <br/>
                    <h2>Have a business, idea or project in mind?</h2>
                    <h2>Let's have a <HeaderHighlight to="/contact">conversation</HeaderHighlight>.</h2>
                </LandingContainer>
            </Layout>
        );
    }
};

export default IndexPage;
