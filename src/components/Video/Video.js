import React, { Component } from 'react'

class Video extends Component {
  render() {
    return (
			<video id="videoPlayer" controls>
				<source src="http://localhost:3000/video" type="video/mp4" />
			</video>
    )
  }
}

export default Video


