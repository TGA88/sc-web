import React from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';
import classNames from 'classnames';
import styles from './track.module.scss';

import RcAudio from 'react-audio-player';

import ReactPlayer from 'react-player'
export default class AudioTrack extends React.Component {
                 static contextTypes = {
                   selectedTrackId: PropTypes.string.isRequired,
                   trackState: PropTypes.bool,
                   onTrackChanged: PropTypes.func.isRequired,
                   onTrackStateChanged: PropTypes.func.isRequired,
                 }

                 playPath = `${process.env.ASSET_PATH}d_teaser/Icon - Play.svg`;
                 pausePath = `${process.env.ASSET_PATH}d_teaser/Icon - Pause.svg`

                 constructor(props) {
                   super(props)
                 }

              //    componentDidUpdate(){
              //     console.log('update')
              
              //     // This assumes that `FilePlayer` is the currently active player
              
              //  const audio = this.refs.reactPlayer.player.player
              //  console.log("this.refs.reactPlayer", this.refs.reactPlayer);
              // //unidefined
              //  console.log("this.refs.reactPlayer.player.player", this.refs.reactPlayer.player.player);

              
              //  const isActive = this.isSelected(this.context.selectedTrackId,this.props.TrackId);
              //  const isPlay = isActive ? this.context.trackState:false;

              //  if(isActive && isPlay){
              //      console.log('load')
              //   //    audio.load()
              //   //    //audio.unmute();
              //   //  audio.play()
                
              //    }else{
              //      console.log('pause');
              //        audio.pause();
              //        this.refs.reactPlayer.getInternalPlayer().currentTime=0;
              //        //audio.currentTime=0;
              //    }
              // }

                 onAction() {
                   console.log("onAction")
                   console.log(`TrackId : ${this.props.TrackId}`)
                   if (this.context.selectedTrackId != this.props.TrackId) {
                     console.log(`fire onTrackChanged:${this.props.TrackId}`)
                     // reset to start time of track
                     this.refs.reactPlayer.getInternalPlayer().currentTime=0;
                     this.context.onTrackChanged({TrackId:this.props.TrackId,TrackBanner:this.props.TrackBanner})
                   } else {
                     const nTrackState = !this.context.trackState;
                     console.log(`fire onTrackStateChanged:${nTrackState}`)
                     this.context.onTrackStateChanged(nTrackState)
                   }
                 }

                 onTrackEnded(){
                  this.refs.reactPlayer.getInternalPlayer().currentTime=0;
                  const nTrackState = !this.context.trackState;
                  this.context.onTrackStateChanged(nTrackState);
                 }
                 
                 isSelected(selectedTrackId, trackId) {
                   return selectedTrackId === trackId
                 }

                 render() {
                   const {
                     TrackId,
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
        

                  
                   return (
                     <div className={styles.audio}>
                        <img className={styles.CoverImg} src={CoverImg} alt={Song}></img>
                       <div className={styles.audioInfo}>
                         <p className={styles.song}>{Song}</p>
                         {/* <p className={styles.artist}>{Artist}</p> */}
                       </div>
                       <div className={styles.audioControl}>
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
                         onEnded={this.onTrackEnded.bind(this)}
                       />
                     </div>
                   )
                 }
               }