import React,{Component} from "react"
import Layout from "../components/layout"
import Plyr from 'plyr';

// const player = new Plyr('#player');

const controls = `
<div class="plyr__controls">
<div class="plyr__progress">
<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
<span role="tooltip" class="plyr__tooltip">00:00</span>
</div>

    <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
        <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
        <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
        <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
        <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
    </button>

</div>
`;

export default class AudioPage extends Component{

    componentDidMount(){
        this.audio1  = new Plyr("#audio1",{controls,autoplay:true});
        this.audio2  = new Plyr("#audio2");
        this.audio3  = new Plyr("#audio3");

       
        this.audio1.on('play', () => {
        
        if (this.audio2.playing) {
            this.audio2.destroy();
            this.audio2 =new Plyr("#audio2");
        }
       
           this.audio3.restart();
           this.audio3.togglePlay(false);
          });
    }

    componentWillUnmount(){
        this.audio1 &&  this.audio1.destroy();
        this.audio2 &&  this.audio2.destroy();
        this.audio3 &&  this.audio3.destroy();
    }
    
    render(){

        const vdoid="bTqVqk7FSmY?origin";
        const vid2 ="MqgfNTEgKhY?origin";
return (
    <Layout>
        <div style={{background:'blue'}}>
 
      
       <h1>Hi from the teser page</h1>
    <p>Welcome to teser page</p>

    
<audio id="audio1"   >
    <source src={`${process.env.ASSET_PATH}audio/SampleAudio_0.4mb.mp3" type="audio/mp3`} />
</audio>
<audio id="audio2"  crossorigin playsinline >
    <source src="/audio/SampleAudio_0.4mb.mp3" type="audio/mp3" />
</audio>
<audio id="audio3"  crossorigin playsinline >
    <source src="/audio/SampleAudio_0.4mb.mp3" type="audio/mp3" />
</audio>
</div>
    </Layout>
    
)
    }

}