import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './main-content.module.scss';
const MainContent = ({ children }) => (
  
    <main className={styles.content}>{children}</main>
  
)

MainContent.propTypes = {
    children: PropTypes.node.isRequired,
}

MainContent.defaultProps = {
  siteTitle: ``,
}

export default MainContent
