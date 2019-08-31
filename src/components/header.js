import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './header.module.scss';
const Header = ({ siteTitle }) => (
  <header className={` ${styles.shadow}`}>
   <div className={`${styles.container}`}>

  
      <img
        className={styles.logoLeft}
        src={`${process.env.ASSET_PATH}m_teaser/Logo - Homes for All Birds.svg`}
        alt="logo"
      />
   

    
      <img
        className={styles.logoRight}
        src={`${process.env.ASSET_PATH}m_teaser/Logo - SC Asset.svg`}
        alt="scassect"
      />
       </div>
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
