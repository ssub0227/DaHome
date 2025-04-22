import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';


let PreviewVideo = styled.div`
  text-align: center;
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;
  border-radius: 8px;
  border:2px dashed var(--brown);
  overflow: hidden;
  background-color: var(--white);

  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

let PreviewText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const VideoPreview = ({ isVideo, videoId }) => {
  if (isVideo === true) {
    return <PreviewVideo><YouTube videoId={videoId} opts={{ width: '100%', height: '360' }} /></PreviewVideo>;
  } else {
    return <PreviewVideo><PreviewText>유효하지 않은 유튜브 링크입니다.</PreviewText></PreviewVideo>;
  }
}

export default VideoPreview;
