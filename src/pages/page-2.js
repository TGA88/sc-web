import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
 
//import styles from './page-2.module.scss';

// import Plyr from 'react-plyr';
// import 'plyr/dist/plyr.css';
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p >Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    {/* <Plyr
    controls
      type="youtube" // or "vimeo"
      videoId="bTqVqk7FSmY"
     
    />
     <Plyr
      type="youtube" // or "vimeo"
      videoId="CDFN1VatiJA"
    />
     <Plyr
      type="youtube" // or "vimeo"
      videoId="CDFN1VatiJA"
    /> */}
  </Layout>
)

export default SecondPage
