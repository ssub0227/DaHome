import {React, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setTitle, setVideoId, setIsVideo } from 'store/projectSlice';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import TitleText from 'components/TitleText';
import VideoPreview from 'components/VideoPreview';

let Input = styled.input`
  padding: 1.5vh;
  margin-bottom: 2vh;
  width: 100%;
  border-radius: 8px;

  #pj_title_input{
    margin-top:0;
  }
`

const Upload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const [localTitle, setLocalTitle] = useState('');
  const [localVideoUrl, setLocalVideoUrl] = useState('');
  const [videoId, setVideoIdState] = useState('');
  const [isVideo, setIsVideoState] = useState(null);


  // 비디오 링크 입력 유효성 검사
  const handleVideo = (e) =>{
    const input = e.target.value;
    setLocalVideoUrl(input);

    const match = input.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?\/\s]{11})/);
    const id = match ? match[1] : '';
    setVideoIdState(id);
    setIsVideoState(id ? true : false);
  }

  const handleCreateProject = () => {
    if (isVideo){
      dispatch(setTitle(localTitle));
      dispatch(setVideoId(videoId));
      dispatch(setIsVideo(isVideo));
      navigate('/share');
    } else {
      alert("유효하지 않은 유튜브 링크입니다.");
    }
  }

  return (  
    <div>
      <TitleText text={'다홈 프로젝트 생성'} marginBottom={5}></TitleText>
      <Input type='text' placeholder='프로젝트 이름을 입력하세요.' id='pj_title_input' value={localTitle} onChange={(e)=>setLocalTitle(e.target.value)}></Input>
      <Input type='text' placeholder='유튜르 링크를 입력하세요.' id='vd_link_input' value={localVideoUrl} onChange={handleVideo}></Input>
      <TitleText text={'동영상 미리보기'} marginTop={5} marginBottom={5}></TitleText>
      <VideoPreview isVideo={isVideo} videoId={videoId} />
      <Button text={'운동 프로젝트 생성'} onClick={handleCreateProject} disabledLink></Button>
    </div>
  )
}
export default Upload;
