/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header"
import "./layout.css"

import favicon16 from "../favicon/favicon-16x16.png"
import favicon32 from "../favicon/favicon-32x32.png"
import favicon96 from "../favicon/favicon-96x96.png"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
         <Helmet
            title={data.site.siteMetadata.title}
            link={[
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
              { rel: 'shortcut icon', type: 'image/png', href: `${favicon96}` },
          ]}
          />
        <Header />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
