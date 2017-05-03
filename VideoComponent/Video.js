import React from 'react';
import { render } from 'react-dom';
import Video from './VideoComponent';

render (
  <Video style={styles.video} videoURI="public/bg-video.mp4" />
)

const styles = {
  video: {
    objectFit: 'cover',
    height: '50vh',
    width: '100%',
    top: '0',
    padding: 'none',
    zIndex: '-1',
    position: 'absolute',
  }
}
