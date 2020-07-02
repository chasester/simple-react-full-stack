
import React, { Component } from 'react';
import VideoElement from "./VideoElement";

export default class VideoContainer extends Component {
    state = { videoData: [] };
  
    componentDidMount() {
/*         fetch("/api/getUsername")
        .then(res => res.json())
        .then(res => console.log(res)); */
        fetch('/api/getVideos/')
        .then(res => res.json())
        .then(res => this.setState({ videoData: res }));
    }
  
    render() {
        console.log(this.state.videoData);
        if(!this.state.videoData || this.state.videoData.length == 0 || this.state.videoData == {}) return <div>Loading</div>;
      return (
        <div className="videoContainer">
            {this.state.videoData.map((x,i) => <VideoElement key={i} videodesc={x.title} videosource={x.thumbnail} />)}
        </div>
      );
      
    }
  }
  