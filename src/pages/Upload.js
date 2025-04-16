import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';

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
    <div>
      <TitleText text={'다홈 프로젝트 생성'}></TitleText>
      <Input type='text' placeholder='프로젝트 이름을 입력하세요.' name='pj_title_input' id='pj_title_input'></Input>
      <Input type='text' placeholder='유튜르 링크를 입력하세요.' name='vd_link_input' id='vd_link_input'></Input>
      <Button text={'확인'}></Button>
      <div className='preview'>
        <TitleText text={'동영상 미리보기'}></TitleText>
        <PrivewVideo>
          <div className='videoBox'>
            <iframe src="https://www.youtube.com/embed/6ZUIwj3FgUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <PreviewText><span>미리보기가 없습니다.</span></PreviewText>
          <PreviewText><span>에러가 발생하였습니다.</span></PreviewText>
        </PrivewVideo>
      </div>
      <Button link={'/share'} text={'운동 프로젝트 생성'}></Button>
    </div>
  )
}
export default Upload;
