import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

let Input = styled.input`
  padding: 1.5vh;
  margin-top: 1.5vh;
  width: 100%;
  border-radius: 8px;
  color: var(--brown);

  #pj_title_input{
    margin-top:0;
  }
`

let Title = styled.h2`
  margin:5% 0;
`

let PrivewVideo = styled.div`
  text-align: center;
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;
  border-radius: 8px;
  overflow: hidden;

  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

let PreviewText = styled.p`
  background-color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Upload = () => {
  return (
    <div className='upload'>
      <Title>다홈 프로젝트 생성</Title>
      <Input type='text' placeholder='프로젝트 이름을 입력하세요.' name='pj_title_input' id='pj_title_input'></Input>
      <Input type='text' placeholder='유튜르 링크를 입력하세요.' name='vd_link_input' id='vd_link_input'></Input>
      <Button link={'/share'} text={'운동 프로젝트 생성'}></Button>
      <div className='preview'>
        <Title>동영상 미리보기</Title>
        <PrivewVideo>
          <div className='videoBox'>
            <iframe src="https://www.youtube.com/embed/6ZUIwj3FgUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <PreviewText><span>미리보기가 없습니다.</span></PreviewText>
          <PreviewText><span>에러가 발생하였습니다.</span></PreviewText>
        </PrivewVideo>
      </div>
    </div>
  )
}
export default Upload;
