import React from 'react';
import Plyr from 'plyr';

export default class AudioPlayer extends React.Component{

   constructor(props){
       super(props);
   }

   componentDidMount(){
    this.audioPlyr  = new Plyr("#audio1",{controls,autoplay:true});
    this.audio1.on('play', () => {
        // if (this.audio2.playing) {
        //     this.audio2.destroy();
        //     this.audio2 =new Plyr("#audio2");
        // }
       
        //    this.audio3.restart();
        //    this.audio3.togglePlay(false);
          });
   }

   componentWillUnmount(){
    this.audioPlyr &&  this.audioPlyr.destroy();

   }
   render(){
       const {oid, audSrc,audType } = this.props;   
       return (
        <audio id={oid} controls>
        <source src={audSrc} type={audType} />
    </audio>
       );
   }
}