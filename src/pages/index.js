import React, { Component } from "react"
import Layout from "../components/layout"
import classNames from "classnames"

import styles from "./teaser.module.scss"

import ScAudioTrack from '../components/audios/track';

import ScAudioPlayer from '../components/audios/player';

const SourcePath = "/Asset/audio/";
export default class Teaser extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  state = {
    bgImgPath: "/Asset/m_teaser/Egg Red Background.png",
    bannerImage:"/Asset/d_teaser/Egg Red CD.png",
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
    return (
      <Layout>
        <div className={`${containerCss}`}>
          <div className={styles.header}>
            <div className={`${styles.banner}`}>
              <img
                className={styles.bannerCover}
                src={this.state.bannerImage} alt="banner"
              ></img>
              <div className={styles.bannerCard}>
                <div className={styles.bannerCardHeader}>
                  <div className={styles.bannerCardHeaderTextBold}>เอสซี แอสเสท</div>
                  <br />
                  <div className={styles.bannerCardHeaderTitle}>HOME FOR ALL BIRDS</div>
                </div>
                <div className={styles.bannerCardBody}>
                  <div className={styles.bannerCardBodyTextBold}>
                    "เรานั้นจะอยู่ เรียนรู้กันไป จะทุกข์ จะสุขเพียงไหน สบาย สบาย.."
                  </div>
                  <div className={styles.bannerCardBodyText}>
                    ยังจำบทเพลงเหล่านี้ได้ไหม
                    จำช่วงเวลาที่มีแต่ความสบายใจได้หรือเปล่า? อดใจไว้อีกนิด
                    เตรียมพบกับเรื่องราวที่จะเชื่อมต่อความสัมพันธ์ของบ้าน
                    ครอบครัว และบทเพลงได้ที่นี่ เร็วๆ นี้
                  </div>
                </div>

                <div className={styles.bannerCardFooter}>
                  <div className={styles.bannerCardFooterTextBold}>ติดตามอัพเดตได้ที่</div>
                  <div className={styles.bannerCardFooterIcons}>
                    <img
                      className={styles.item}
                      src={`/Asset/m_teaser/Icon - Social - Facebook.svg`}
                      alt="FB"
                    ></img>
                    <img
                      className={styles.item}
                      src="/Asset/m_teaser/Icon - Social - Instagram.svg"
                      alt="FB"
                    ></img>
                    <img
                      className={styles.item}
                      src="/Asset/m_teaser/Icon - Social - YouTube.svg"
                      alt="FB"
                    ></img>
                    <img
                      className={styles.item}
                      src="/Asset/m_teaser/Icon - Social - Twitter.svg"
                      alt="FB"
                    ></img>
                    
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
                TrackBanner="/Asset/d_teaser/Egg Red CD.png"
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
                TrackBanner="/Asset/d_teaser/Egg Green CD.png"
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
                TrackBanner="/Asset/d_teaser/Egg Yellow CD.png"
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
                TrackBanner="/Asset/d_teaser/Egg Pink CD.png"
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
                TrackBanner="/Asset/d_teaser/Egg Blue CD.png"
              ></ScAudioTrack>
            </ScAudioPlayer>
          </div>
        </div>
      </Layout>
    )
  }
}
