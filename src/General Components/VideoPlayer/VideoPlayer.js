import React, { Component } from "react";
import videojs from "video.js";
import YouTube from "react-youtube";

import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import { BaseUrl } from "../../Patials/BaseUrl";
import { IconButton } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import ControlBar from "video-react/lib/components/control-bar/ControlBar";
import GetAppIcon from "@material-ui/icons/GetApp";
import ReplayControl from "video-react/lib/components/control-bar/ReplayControl";
const opts = {
  height: "500",
  width: "750",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
export default class VideoPlayer extends Component {
  constructor() {
    super();
    this.state = {};
    // this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    // this.changeSource = this.changeSource.bind(this);
  }

  componentWillUnmount() {
    // subscribe state change
  }

  componentWillReceiveProps() {
    // this.player.subscribeToStateChange(this.handleStateChange.bind(this));
this.load()
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  load(){
    this.player.load();

  }
  componentDidMount() {
    // alert("ok");
    this.state = {
      source: `${BaseUrl}/stream/${this.props.course.videoPath}`,
    };
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }
  pause() {
    this.player.pause();
  }

  render() {
    return (
      <>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          poster={`${BaseUrl}/${this.props.course.banner}`}
          fluid
          height={500}
        >
          <ControlBar autoHide={false}>
            <ReplayControl seconds={10} order={2.2} />

            <ReplayIcon onClick={() => this.load()} order={7} />
            <GetAppIcon order={7} />
          </ControlBar>
          <BigPlayButton position="center" />
          <source
            src={
              !this.state.source &&
              `${BaseUrl}stream/${this.props.course.videoPath}`
            }
          />
        </Player>
      </>
    );
  }
}

{
  /* <YouTube
  videoId={props.course.introVideo} // defaults -> null
  // id={string} // defaults -> null
  // className={string} // defaults -> null
  containerClassName="w-100" // defaults -> ''
  opts={opts} // defaults -> {}
  // onReady={func} // defaults -> noop
  // onPlay={func} // defaults -> noop
  // onPause={func} // defaults -> noop
  // onEnd={func} // defaults -> noop
  // onError={func} // defaults -> noop
  // onStateChange={func} // defaults -> noop
  // onPlaybackRateChange={func} // defaults -> noop
  // onPlaybackQualityChange={func} // defaults -> noop
/> */
}
