import React, { Component } from 'react';
import './app.css';
//import ReactImage from './react.png';
import VideoContainer from './VideoContainer';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
  }

  render() {
    return <VideoContainer />
  }
}
