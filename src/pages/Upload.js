import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';
import YoutubeVideo from 'components/Video';

let Input = styled.input`
  padding: 1.5vh;
  margin-bottom: 2vh;
  width: 100%;
  border-radius: 8px;

  #pj_title_input{
    margin-top:0;
  }
`

let PrivewVideo = styled.div`
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

const Upload = () => {
  const [roomTitle, setRoomTitle] = useState('');
  const [videoId, setVideoId] = useState('');
  const [isVideo, setIsVideo] = useState(null);
  

  // 비디오 링크 입력 유효성 검사
  const handleVideo = (event) =>{
    const input = event.target.value;
    const match = input.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?\/\s]{11})/);
    const id = match ? match[1] : '';
    setVideoId(id);
    setIsVideo(id ? true : false);
  }

  const renderPreview = () => {
    if (isVideo === true && videoId) {
      return <YoutubeVideo videoId={videoId} />;
    } else {
      return <PreviewText> 유효하지 않은 유튜브 링크입니다.</PreviewText>;
    }
  };

  return (  
    <div>
      <TitleText text={'다홈 프로젝트 생성'} marginBottom={5}></TitleText>
      <Input type='text' placeholder='프로젝트 이름을 입력하세요.' id='pj_title_input' value={roomTitle} onChange={(event)=>setRoomTitle(event.target.value)}></Input>
      <Input type='text' placeholder='유튜르 링크를 입력하세요.' id='vd_link_input' onChange={handleVideo}></Input>
      <div className='preview'>
        <TitleText text={'동영상 미리보기'} marginTop={5} marginBottom={5}></TitleText>
        <PrivewVideo>{renderPreview()}</PrivewVideo>
      </div>
      <Button link={'/share'} text={'운동 프로젝트 생성'}></Button>
    </div>
  )
}
export default Upload;
