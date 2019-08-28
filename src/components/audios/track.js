import React from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';
import classNames from 'classnames';
import styles from './player.module.scss';

import RcAudio from 'react-audio-player';

import ReactPlayer from 'react-player'
export default class AudioTrack extends React.Component {
                 static contextTypes = {
                   selectedTrackId: PropTypes.string.isRequired,
                   trackState: PropTypes.bool,
                   onTrackChanged: PropTypes.func.isRequired,
                   onTrackStateChanged: PropTypes.func.isRequired,
                 }

                 playPath = "/Asset/d_teaser/Icon - Play.svg"
                 pausePath = "/Asset/d_teaser/Icon - Pause.svg"

                 constructor(props) {
                   super(props)
                 }

                 onAction() {
                   console.log("onAction")
                   console.log(`TrackId : ${this.props.TrackId}`)
                   if (this.context.selectedTrackId != this.props.TrackId) {
                     console.log(`fire onTrackChanged:${this.props.TrackId}`)
                     this.context.onTrackChanged(this.props.TrackId)
                   } else {
                     const nTrackState = !this.context.trackState
                     console.log(`fire onTrackStateChanged:${nTrackState}`)
                     this.context.onTrackStateChanged(nTrackState)
                   }
                 }
                 isSelected(selectedTrackId, trackId) {
                   return selectedTrackId === trackId
                 }

                 render() {
                   const {
                     TrackId,
                     AudSrc,
                     AudType,
                     CoverImg,
                     Song,
                     Artist,
                     Source
                   } = this.props

                   const { trackState,selectedTrackId } = this.context
                   console.log(this.props)

                   const isActive = this.isSelected(selectedTrackId,TrackId);
                   const isPlay = isActive ? trackState:false;

                   let srcPath = this.playPath;
                   if(isActive){
                    srcPath = trackState ? this.pausePath : this.playPath;
                   }
        

                   let SourcePath = "/Asset/audio/";
                   return (
                     <div className={styles.audio}>
                       <div className={styles.audioInfo}>
                         <p>{Song}</p>
                         <p>{Artist}</p>
                         <img src={CoverImg} alt={Song}></img>
                       </div>

                       <div className={styles.audControl}>
                         <img
                           src={`${srcPath}`}
                           onClick={this.onAction.bind(this)}
                         ></img>
                       </div>

                       <ReactPlayer
                         ref="reactPlayer"
                         url={Source}
                         playing={isPlay}
                         controls={true}
                         config={{
                           file: {
                             attributes: { autoPlay: isPlay },
                             forceAudio: true,
                           },
                         }}
                         style={{ display: "none" }}
                       />
                     </div>
                   )
                 }
               }