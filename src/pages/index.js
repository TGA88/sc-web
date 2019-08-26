import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.mainbanner} >
    
    <div  className={styles.title}>HOME <br/> FOR ALL <br/> BIRDS</div>  
    <p className={styles.text}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
   
   <div className={styles.btnContainer}> 
    <Link className={styles.btnLink} to="/page-2/">Discover More</Link>
    <Link className={styles.btnLink} to="/page-2/">Home For You</Link>
   </div>

      
   </div>

     
    
  </Layout>
)

export default IndexPage
