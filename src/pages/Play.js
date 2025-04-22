import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TitleText from 'components/TitleText';
import Button from 'components/Button';
import VideoPreview from 'components/VideoPreview';

let HumanList = styled.ul`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:5px 5px;
  margin-top:2vh;
`

let HumanItem = styled.li`
  display: flex;
  align-items:center;
  justify-content:space-between;
  padding:1.5vh;
  border-radius:8px;
  background:var(--light-green-shadow);
  color:#fff;

  span{
    font-weight:800;
  }
`


const Play = () => {
  const {title,videoId,isVideo}  = useSelector((state) => state.project);

  return (
    <div>
      <TitleText text={title} marginBottom={5}></TitleText>
      <div>
        <VideoPreview isVideo={isVideo} videoId={videoId} />
      </div>
      <HumanList>
        <HumanItem>
          <p>염수빈</p>|<p>연속 <span>3</span>일</p>
        </HumanItem>
        <HumanItem>
          <p>김은수</p>|<p>연속 <span>3</span>일</p>
        </HumanItem>
        <HumanItem>
          <p>김현선</p>|<p>연속 <span>3</span>일</p>
        </HumanItem>
        <HumanItem>
          <p>박은혜</p>|<p>연속 <span>3</span>일</p>
        </HumanItem>
      </HumanList>
      <Button text={'오늘 운동 완료'}></Button>
    </div>
  )
}
export default Play;
