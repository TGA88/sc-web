import React from 'react';
import PropTypes  from 'prop-types';

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

                 onTrackChanged(trackId) {
                    this.setState({ selectedTrackId: trackId, trackState: true },()=> this.props.onStateChanged(this.state))
                   
                 }

                 onTrackStateChanged(newValue) {
                     console.log(`in onTrackStateChanged : ${newValue} `)
                     this.setState({trackState:newValue});
                 }

                 state = {
                   selectedTrackId: this.props.selectedTrackId,
                   trackState: this.props.trackState,
                 }
               

                 render() {
                   return <>{this.props.children}</>
                 }
               }

AudioPlayer.propTypes ={
    onStateChanged:PropTypes.func
    }