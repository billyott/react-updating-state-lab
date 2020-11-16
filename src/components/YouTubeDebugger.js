// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
    };


    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleResolution} className="resolution">
                    resolution: {this.state.settings.video.resolution}
                </button>
                <button onClick={this.handleBitrate} className="bitrate">
                    bitrate: {this.state.settings.bitrate}
                </button>
            </div>
        )
    }



}

export default YouTubeDebugger