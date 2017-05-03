import React from 'react'

// takes style, videoURI props

export default (props) => (
  <video style={props.style} loop autoPlay>
    <source src={props.videoURI} type="video/mp4" />
    <source src={props.videoURI} type="video/ogg" />
    Your browser does not support the video tag.
  </video>
)

