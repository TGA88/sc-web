/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MainContent from './main-content';
import Footer from "./footer";
import styles from './layout.module.scss';
// import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

    <div className={styles.container}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContent>
        {children}
        <Footer></Footer>
      </MainContent>

      </div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
