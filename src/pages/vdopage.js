import React,{Component} from "react"
import Layout from "../components/layout"
import Plyr from 'plyr';

// const player = new Plyr('#player');
export default class VdoPage extends Component{

    componentDidMount(){
        // if(typeof document !== "undefined"){}

       
        // this.player = node ? new plyr(node, options) : null;
        this.player1 =new Plyr("#player1");
        this.player2 =new Plyr("#player2");
        this.player3 =new Plyr("#player3");
        this.audio1  = new Plyr("#audio1");

        // this.player1.addEventListener('play',event=>{
        //     this.player2.stop();
        //     this.player3.stop();
        // })
        this.player1.on('play', () => {
           // this.player2.stop();

        //    const stopAsync  = new  Promise((resolver)=>{
        //     resolver(this.player2.destroy());
        //    }).then(e=>{
        //       return new Promise(res=> {
        //           res( this.player2 =new Plyr("#player2"))
        //         });
        //    })

        //    stopAsync.then(r=>{
        //        console.log('complete');
        //    })
           
        if (this.player2.playing) {
            this.player2.destroy();
            this.player2 =new Plyr("#player2");
        }
       
           this.player3.restart();
           this.player3.togglePlay(false);
          
         

           
           
           
          });
        

    }
    componentWillUnmount(){
        
        this.player1 && this.player1.destroy();

        this.player2 && this.player2.destroy();

        this.player3 && this.player3.destroy();
        this.audio1 &&  this.audio1.destroy();
    }
    
    render(){

        const vdoid="bTqVqk7FSmY?origin";
        const vid2 ="MqgfNTEgKhY?origin";
return (
    <Layout>
       <h1>Hi from the teser page</h1>
    <p>Welcome to teser page</p>

       <div class="plyr__video-embed" id="player1" style={{maxWidth:"350px"}}>
    <iframe 
    title="player1"
        src={`https://www.youtube.com/embed/${vdoid}=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
        allowfullscreen
        allowtransparency
        allow="autoplay"
    ></iframe>
</div>

<div class="plyr__video-embed" id="player2" style={{maxWidth:"350px"}}>
    <iframe 
    title="player2"
        src={`https://www.youtube.com/embed/${vdoid}=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
        allowfullscreen
        allowtransparency
        allow="autoplay"
    ></iframe>
</div>

<div class="plyr__video-embed" id="player3"  style={{maxWidth:"350px"}}>
    <iframe 
    title="player3"
        src={`https://www.youtube.com/embed/${vid2}=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
        allowfullscreen
        allowtransparency
        allow="autoplay"
    ></iframe>
</div>


<audio id="audio1"  crossorigin playsinline >
    <source src="/audio/SampleAudio_0.4mb.mp3" type="audio/mp3" />
</audio>
    </Layout>
    
)
    }

}