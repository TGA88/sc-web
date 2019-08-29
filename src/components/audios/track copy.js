import React from 'react';
import Plyr from 'plyr';
import classNames from 'classnames';
import styles from './player.module.scss';

import RcAudio from 'react-audio-player';

import ReactPlayer from 'react-player'
export default class AudioTrackOld extends React.Component{

   constructor(props){
       super(props);

       
       this.state={
        isPlay :this.props.Playing,
        isMuted:true
    }
   }

 
   componentDidMount(){
                        // console.log("mount")

                        // // This assumes that `FilePlayer` is the currently active player
                        // const audio = this.refs.reactPlayer.player.player
                        // console.log(
                        //   "this.refs.reactPlayer",
                        //   this.refs.reactPlayer
                        // )
                        // //unidefined
                        // console.log(
                        //   "this.refs.reactPlayer.player.player",
                        //   this.refs.reactPlayer.player.player
                        // )
                        // if (this.state.isPlay) {
                        //   audio.load()
                        //   audio.play()
                        //  // audio.unmute();
                        // }
                      }

   componentDidUpdate(){
    console.log('update')

//     // This assumes that `FilePlayer` is the currently active player

//  const audio = this.refs.reactPlayer.player.player
//  console.log("this.refs.reactPlayer", this.refs.reactPlayer);
// //unidefined
//  console.log("this.refs.reactPlayer.player.player", this.refs.reactPlayer.player.player);
//  if(this.state.isPlay){
//      console.log('load')
//      audio.load()
//      //audio.unmute();
//    audio.play()
  
//    }else{
//        audio.pause();
//    }
}

 
   componentWillUnmount(){
    // this.audioPlyr &&  this.audioPlyr.destroy();
   }

   
   onAction(){
       console.log('onAction');
            //    const { AudStatus } = this.props
            //    const isStarting = AudStatus === "play" ? true : false
            //    if(this.audioPlyr){
            //     if(isStarting){
            //         console.log("action play");
            //         this.audioPlyr.play();
            //     } else{
            //         this.audioPlyr.destroy();
            //         this.audioPlyr  = new Plyr(`#${this.props.OID}`);
            //     }
            //    }

            this.setState({isPlay: !this.state.isPlay})
             }

   render(){
       const {OID, AudSrc,AudType,CoverImg,Song,Artist,AudStatus } = this.props;   
       console.log(this.props);
       const playPath = `${process.env.ASSET_PATH}d_teaser/Icon - Play.svg`;
       const pausePath = `${process.env.ASSET_PATH}d_teaser/Icon - Pause.svg`;
       let srcPath = AudStatus === "play" ? pausePath :playPath;
        
       return (
         <div className={styles.audio}>
           <div className={styles.audioInfo}>
             <p>{Song}</p>
             <p>{Artist}</p>
             <img src={CoverImg} alt={Song}></img>
           </div>

           <div className={styles.audControl}>
             <img src={`${srcPath}`} onClick={this.onAction.bind(this)}></img>
           </div>

  <ReactPlayer
      ref='reactPlayer'
      url={[
        {src:AudSrc, type:AudType }
      ]}
   playing ={this.state.isPlay}
      controls={true}
      // muted={true}
     //  playing={this.state.isPlay}
       config={{
       file:{ attributes:{autoPlay:this.state.isPlay}, forceAudio:true}   }}
      />
  
         </div>
       )
   }
}