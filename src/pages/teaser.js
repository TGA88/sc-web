import React, { Component } from "react"
import Layout from "../components/layout"
import Plyr from "plyr"
import classNames from "classnames"

import styles from "./teaser.module.scss"

import ScAudioTrack from '../components/audios/track';

import ScAudioPlayer from '../components/audios/player';

const SourcePath = "/Asset/audio/";
export default class AudioPage extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    bgImgPath: "/Asset/m_teaser/Egg Red Background.png",
    selectedBackgroundTrackId: 'play1',
  }

  handleAudioPlayerStateChanged(playerState){
  console.log('`AudioPlayer StateChange');
  console.log(playerState);
  this.setState({selectedBackgroundTrackId:playerState.selectedTrackId})
  }
  render() {
    let containerCss = classNames(
      styles.container,
      { [styles.bg1]: this.state.selectedBackgroundTrackId === 'play1' },
      { [styles.bg2]: this.state.selectedBackgroundTrackId === 'play2' },
      { [styles.bg3]: this.state.selectedBackgroundTrackId === 'play3' },
      { [styles.bg4]: this.state.selectedBackgroundTrackId === 'play4' },
      { [styles.bg5]: this.state.selectedBackgroundTrackId === 'play5' }
    )
    return (
      <Layout>
        <div className={`${containerCss}`}>
          <div className={styles.header}>
            <div className={styles.banner}>
              <img classNames={styles.bannerCover}></img>
              <div className={styles.bannerCard}>
                <div className={styles.bannerCardHeader}>
                  <div className={styles.textBold}></div>
                  <div className={styles.title}></div>
                </div>
                <div classname={styles.bannerCardBody}>
                  <div className={styles.textBold}></div>
                  <div className={styles.text}></div>
                </div>

                <div className={styles.bannerCardFooter}>
                  <div className={styles.textBold}></div>
                  <div className={styles.icons}>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <ScAudioPlayer
              selectedTrackId={"play1"}
              trackState={true}
              onStateChanged={e => this.handleAudioPlayerStateChanged(e)}
            >
              <ScAudioTrack
                TrackId="play1"
                CoverImg={"/Asset/d_teaser/Egg Red.png"}
                Artist={"Bird Thongchai"}
                Song={"สบาย สบาย"}
                Source={[
                  { src: `${SourcePath}สบาย สบาย.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}สบาย สบาย.ogg`, type: "audio/ogg" },
                ]}
              ></ScAudioTrack>
              <ScAudioTrack
                TrackId="play2"
                CoverImg={"/Asset/d_teaser/Egg Green.png"}
                Artist={"Bird Thongchai"}
                Song={"คนไม่มีแฟน"}
                Source={[
                  { src: `${SourcePath}คนไม่มีแฟน.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}คนไม่มีแฟน.ogg`, type: "audio/ogg" },
                ]}
              ></ScAudioTrack>
              <ScAudioTrack
                TrackId="play3"
                CoverImg={"/Asset/d_teaser/Egg Yellow.png"}
                Artist={"Bird Thongchai"}
                Song={"ซ่อมได้"}
                Source={[
                  { src: `${SourcePath}ซ่อมได้.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}ซ่อมได้.mp3`, type: "audio/ogg" },
                ]}
              ></ScAudioTrack>
              <ScAudioTrack
                TrackId="play4"
                CoverImg={"/Asset/d_teaser/Egg Pink.png"}
                Artist={"Bird Thongchai"}
                Song={"เล่าสู่กันฟัง"}
                Source={[
                  { src: `${SourcePath}เล่าสู่กันฟัง.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}.เล่าสู่กันฟัง`, type: "audio/ogg" },
                ]}
              ></ScAudioTrack>

              <ScAudioTrack
                TrackId="play5"
                CoverImg={"/Asset/d_teaser/Egg Blue.png"}
                Artist={"Bird Thongchai"}
                Song={"หมั่นคอยดูแลและรักษาดวงใจ"}
                Source={[
                  {
                    src: `${SourcePath}หมั่นคอยดูแลและรักษาดวงใจ.mp3`,
                    type: "audio/mp3",
                  },
                  {
                    src: `${SourcePath}หมั่นคอยดูแลและรักษาดวงใจ.ogg`,
                    type: "audio/ogg",
                  },
                ]}
              ></ScAudioTrack>
            </ScAudioPlayer>
          </div>
        </div>
      </Layout>
    )
  }
}
