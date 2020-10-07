import React, {Component} from 'react';
import {Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
export default class Video extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <YouTube
        apiKey="AIzaSyBXHSKE791ah1TTBaS9SP9uthF35nXsq1g"
          videoId="KKc_RMln5UY" // The YouTube video ID
          play // control playback of video with true/false
          // fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          controls={0}
          onReady={(e) => this.setState({isReady: true})}
          onChangeState={(e) => this.setState({status: e.state})}
          onChangeQuality={(e) => this.setState({quality: e.quality})}
          onError={(e) => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
      </View>
    );
  }
}
