import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const VideoPreview = ({ isVideo, videoId }) => {
  let PreviewText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  if (isVideo === true) {
    return <YouTube videoId={videoId} opts={{ width: '100%', height: '360' }} />;
  } else {
    return <PreviewText>유효하지 않은 유튜브 링크입니다.</PreviewText>;
  }
}

export default VideoPreview;
