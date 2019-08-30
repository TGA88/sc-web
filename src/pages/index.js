import React, { Component } from "react"
import Layout from "../components/layout"
import classNames from "classnames"

import styles from "./index.module.scss"

import ScAudioTrack from '../components/audios/track';

import ScAudioPlayer from '../components/audios/player';

const SourcePath = `${process.env.ASSET_PATH}audio/`;
export default class Teaser extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    bgImgPath: `${process.env.ASSET_PATH}m_teaser/Egg Red Background.png`,
    bannerImage:`${process.env.ASSET_PATH}d_teaser/Egg Red CD.png`,
    selectedBackgroundTrackId: 'play1',
  }

  handleAudioPlayerStateChanged(playerState){
  console.log('`AudioPlayer StateChange');
  console.log(playerState);


  this.setState({selectedBackgroundTrackId:playerState.selectedTrackId,bannerImage:playerState.trackBanner})
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

    console.log(`env is :${process.env.NODE_ENV}`);

    console.log(`project env is : `)
    console.log(process.env.GATSBY_ASSET_PATH);
    console.log(process.env.ASSET_PATH);
    return (
      <Layout>
        <div className={`${containerCss}`}>
          <div className={styles.header}>
            <div className={`${styles.banner}`}>
              <img
                className={styles.bannerCover}
                src={this.state.bannerImage}
                alt="banner"
              ></img>
              <div className={styles.bannerCard}>
                <div className={styles.bannerCardHeader}>
                  <div className={styles.bannerCardHeaderTextBold}>
                    เอสซี แอสเสท
                  </div>
                  <br />
                  <div className={styles.bannerCardHeaderTitle}>
                    HOMES FOR ALL BIRDS
                  </div>
                </div>
                <div className={styles.bannerCardBody}>
                  <div className={styles.bannerCardBodyTextBold}>
                    "เรานั้นจะอยู่ เรียนรู้กันไป จะทุกข์ จะสุขเพียงไหน สบาย
                    สบาย.."
                  </div>
                  <div className={styles.bannerCardBodyText}>
                    ยังจำบทเพลงเหล่านี้ได้ไหม
                    จำช่วงเวลาที่มีแต่ความสบายใจได้หรือเปล่า? อดใจไว้อีกนิด
                    เตรียมพบกับเรื่องราวที่จะเชื่อมต่อความสัมพันธ์ของบ้าน
                    ครอบครัว และบทเพลงได้ที่นี่ เร็วๆ นี้
                  </div>
                </div>

                <div className={styles.bannerCardFooter}>
                  <div className={styles.bannerCardFooterTextBold}>
                    ติดตามอัพเดตได้ที่
                  </div>
                  <div className={styles.bannerCardFooterIcons}>
                    <a href="https://www.facebook.com/scasset">
                      <img
                        className={styles.item}
                        src={`${process.env.ASSET_PATH}m_teaser/Icon - Social - Facebook.svg`}
                        alt="FB"
                      ></img>
                    </a>
                    <a href="https://www.instagram.com/scasset">
                      <img
                        className={styles.item}
                        src={`${process.env.ASSET_PATH}m_teaser/Icon - Social - Instagram.svg`}
                        alt="FB"
                      ></img>
                    </a>
                    <a href="https://www.youtube.com/scassetonline">
                      <img
                        className={styles.item}
                        src={`${process.env.ASSET_PATH}m_teaser/Icon - Social - YouTube.svg`}
                        alt="FB"
                      ></img>
                    </a>
                    <a href="https://twitter.com/sc_asset">
                      <img
                        className={styles.item}
                        src={`${process.env.ASSET_PATH}m_teaser/Icon - Social - Twitter.svg`}
                        alt="FB"
                      ></img>
                    </a>
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
                CoverImg={`${process.env.ASSET_PATH}d_teaser/Egg Red.png`}
                Artist={"Bird Thongchai"}
                Song={"สบาย สบาย"}
                Source={[
                  { src: `${SourcePath}สบาย สบาย.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}สบาย สบาย.ogg`, type: "audio/ogg" },
                ]}
                TrackBanner={`${process.env.ASSET_PATH}d_teaser/Egg Red CD.png`}
              ></ScAudioTrack>
              <hr/>
              <ScAudioTrack
                TrackId="play2"
                CoverImg={`${process.env.ASSET_PATH}d_teaser/Egg Green.png`}
                Artist={"Bird Thongchai"}
                Song={"คนไม่มีแฟน"}
                Source={[
                  { src: `${SourcePath}คนไม่มีแฟน.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}คนไม่มีแฟน.ogg`, type: "audio/ogg" },
                ]}
                TrackBanner={`${process.env.ASSET_PATH}d_teaser/Egg Green CD.png`}
              ></ScAudioTrack>
               <hr/>
              <ScAudioTrack
                TrackId="play3"
                CoverImg={`${process.env.ASSET_PATH}d_teaser/Egg Yellow.png`}
                Artist={"Bird Thongchai"}
                Song={"ซ่อมได้"}
                Source={[
                  { src: `${SourcePath}ซ่อมได้.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}ซ่อมได้.mp3`, type: "audio/ogg" },
                ]}
                TrackBanner={`${process.env.ASSET_PATH}d_teaser/Egg Yellow CD.png`}
              ></ScAudioTrack>
               <hr/>
              <ScAudioTrack
                TrackId="play4"
                CoverImg={`${process.env.ASSET_PATH}d_teaser/Egg Pink.png`}
                Artist={"Bird Thongchai"}
                Song={"เล่าสู่กันฟัง"}
                Source={[
                  { src: `${SourcePath}เล่าสู่กันฟัง.mp3`, type: "audio/mp3" },
                  { src: `${SourcePath}.เล่าสู่กันฟัง`, type: "audio/ogg" },
                ]}
                TrackBanner={`${process.env.ASSET_PATH}d_teaser/Egg Pink CD.png`}
              ></ScAudioTrack>
               <hr/>

              <ScAudioTrack
                TrackId="play5"
                CoverImg={`${process.env.ASSET_PATH}d_teaser/Egg Blue.png`}
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
                TrackBanner={`${process.env.ASSET_PATH}d_teaser/Egg Blue CD.png`}
              ></ScAudioTrack>
               <hr/>
            </ScAudioPlayer>
          </div>
        </div>
      </Layout>
    )
  }
}
