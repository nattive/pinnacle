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
import PropTypes from 'prop-types';

const opts = {
  height: "500",
  width: "750",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

class VideoPlayer extends Component {
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

  load() {
    this.player.load();

  }
  componentDidMount() {
    // alert("ok");
    this.state = {
      source: this.props.videoUrl,
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
    const { videoUrl, banner } = this.props
  return (
    <>
      {

        videoUrl && (
          <>

            <Player
              ref={(player) => {
                this.player = player;
              }}
              poster={banner}
              fluid
            >
              <ControlBar autoHide={false}>
                <ReplayControl seconds={10} order={2.2} />

                {/* <ReplayIcon onClick={() => this.load()} order={7} /> */}
                {/* <GetAppIcon order={7} /> */}
              </ControlBar>
              <BigPlayButton position="center" />
              <source
                src={
                   videoUrl
                }
              />
            </Player>
          </>
        )
      }
    </>
  );
}
}
VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default VideoPlayer