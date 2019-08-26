import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './footer.module.scss';
const Footer = ({ siteTitle }) => (
  <footer className={`${styles.container}`}>
    <div className={`${styles.containerLink}`}>
      <Link to="/" >
        <img
          className={styles.logo}
          src={`/Asset/m_teaser/Logo - SC Asset-1.svg`}
          alt="logo"
        />
      </Link>
      <div className={`container ${styles.right}`}>
        <div className={`row ${styles.rowLink}`}>
          <Link
            to="/"
            className={`col-6 col-sm-3 col-md-5 col-xl-4 ${styles.colLink} ${styles.textBold}`}
          >
            ABOUT US
          </Link>
          <Link
            to="/"
            className={`col-6 col-sm-3 col-md-5 col-xl-4 ${styles.colLink} ${styles.textBold}`}
          >
            QUICK LINKS
          </Link>
        </div>
        <div className={`row ${styles.rowLink}`}>
          <Link
            to="/"
            className={`col-6 col-sm-3 col-md-5 col-xl-4 ${styles.colLink}`}
          >
            Our Company
          </Link>
          <Link
            to="/"
            className={`col-6 col-sm-3 col-md-5 col-xl-4 ${styles.colLink}`}
          >
            Official Website
          </Link>
        </div>
        <div className={`row ${styles.rowLink}`}>
          <Link
            to="/"
            className={`col-6 col-sm-3 col-md-5 col-xl-4 ${styles.colLink}`}
          >
            Newsroom
          </Link>
        </div>
      </div>
    </div>
    <hr></hr>

    <div className={styles.social}>
      <div className={styles.iconContainer}>
        <img
          className={styles.item}
          src={`/Asset/m_teaser/Icon-Facebook-1.svg`}
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src="/Asset/m_teaser/Icon-Instagram-1.svg"
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src="/Asset/m_teaser/Icon-YouTube-1.svg"
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src="/Asset/m_teaser/Icon-Twitter-1.svg"
          alt="FB"
        ></img>
        <img
          className={styles.item}
          src="/Asset/m_teaser/Icon-Pinterest.svg"
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
