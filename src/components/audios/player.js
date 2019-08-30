import React from 'react';
import PropTypes  from 'prop-types';
import styles from './player.module.scss';

export default class AudioPlayer extends React.Component {
                 static childContextTypes = {
                   selectedTrackId: PropTypes.string.isRequired,
                   trackState: PropTypes.bool,
                   onTrackChanged: PropTypes.func.isRequired,
                   onTrackStateChanged: PropTypes.func.isRequired,
                 }
                 getChildContext = () => {
                   return {
                     selectedTrackId: this.state.selectedTrackId,
                     trackState: this.state.trackState,
                     onTrackChanged: this.onTrackChanged.bind(this),
                     onTrackStateChanged: this.onTrackStateChanged.bind(this),
                   }
                 }

                 constructor(props) {
                    super(props)
                    this.onTrackChanged.bind(this);
                    this.onTrackStateChanged.bind(this);
                  }

                 onTrackChanged({TrackId,TrackBanner}) {
                   console.log(`onTrackChange: ${TrackId} , TrackBanner : ${TrackBanner}`)
                    this.setState({ selectedTrackId: TrackId, trackState: true ,trackBanner:TrackBanner},()=> this.props.onStateChanged(this.state))
                   
                 }

                 onTrackStateChanged(newValue) {
                     console.log(`in onTrackStateChanged : ${newValue} `)
                     this.setState({trackState:newValue});
                 }

                 state = {
                   selectedTrackId: this.props.selectedTrackId,
                   trackState: this.props.trackState,
                   trackBanner:""
                 }
               

                 render() {
                   return <>
                   <div className={styles.player}>
                   {this.props.children}
                   </div>
                   </>
                 }
               }

AudioPlayer.propTypes ={
    onStateChanged:PropTypes.func
    }