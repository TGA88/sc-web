import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './header.module.scss';
const Header = ({ siteTitle }) => (
  <header className={`${styles.container} ${styles.shadow}`}>
    <Link to="/page-2">
      <img
        className={styles.logoRight}
        src={`/Asset/m_teaser/Logo - Homes for All Birds.svg`}
        alt="logo"
      />
    </Link>

    <Link to="/">
      <img
        className={styles.logoLeft}
        src={`/Asset/m_teaser/Logo - SC Asset.svg`}
        alt="scassect"
      />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
