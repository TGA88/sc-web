import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './footer.module.scss';
const Footer = ({ siteTitle }) => (
  <footer className={`${styles.container}`}>
    <div className={`${styles.containerLink}`}>
      <Link to="/">
        <img
          className={styles.logo}
          src={`${process.env.ASSET_PATH}m_teaser/Logo - SC Asset-1.svg`}
          alt="logo"
        />
      </Link>
      <div className={`container ${styles.right}`}>
        <div className={`row ${styles.rowLink}`}>
          <a
            href="http://www.scasset.com"
            className={`col-4 col-sm-4 col-md-3 col-xl-4 ${styles.colLink}`}
          >
            Official Website
          </a>
          <a
            href="https://www.scasset.com/baanruejai/"
            className={`col-4 col-sm-4 col-md-3 col-xl-4 ${styles.colLink}`}
          >
            BaanRuejai
          </a>
          <a
            href="http://www.scable.co.th"
            className={`col-4 col-sm-4 col-md-3 col-xl-4 ${styles.colLink}`}
          >SC Able</a>
        </div>
      </div>
    </div>
    <hr></hr>

    <div className={styles.social}>
      <div className={styles.iconContainer}>
        <img
          className={styles.item}
          src={`${process.env.ASSET_PATH}m_teaser/Icon-Facebook-1.svg`}
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src={`${process.env.ASSET_PATH}m_teaser/Icon-Instagram-1.svg`}
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src={`${process.env.ASSET_PATH}m_teaser/Icon-YouTube-1.svg`}
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src={`${process.env.ASSET_PATH}m_teaser/Icon-Twitter-1.svg`}
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src={`${process.env.ASSET_PATH}m_teaser/Icon-Pinterest.svg`}
          alt="FB"
        ></img>
      </div>
      <div className={styles.copyright}>© 2019 SC Asset Corporation PLC</div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
