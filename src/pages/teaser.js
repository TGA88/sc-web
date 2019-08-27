import React, { Component } from "react"
import Layout from "../components/layout"
import Plyr from "plyr"
import classNames from "classnames"

import styles from "./teaser.module.scss"

export default class AudioPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    bgImgPath: "/Asset/m_teaser/Egg Red Background.png",
    selectedIdx: 0,
  }
  render() {
    let containerCss = classNames(
      styles.container,
      { [styles.bg1]: this.state.selectedIdx === 0 },
      { [styles.bg2]: this.state.selectedIdx === 1 },
      { [styles.bg3]: this.state.selectedIdx === 3 },
      { [styles.bg4]: this.state.selectedIdx === 4 },
      { [styles.bg5]: this.state.selectedIdx === 5 }
    )
    return (
      <Layout>
        <div className={`${containerCss}`}>
          <h1>Hi from the teser page</h1>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>
          <p>Welcome to teser page</p>

           <p>Welcome to teser page</p>
        </div>
      </Layout>
    )
  }
}
