
import React, { Component } from 'react';

export default class VideoElement extends Component {
    render() {
        console.log(this.props);
      return (
        <div className="videoElement">
            <img className="videoThumbnail" src={this.props.videosource} />
            <div className="videoTitle">{this.props.videodesc}</div> 
        </div>
      );
    }
  }
  