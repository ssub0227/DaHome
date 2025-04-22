import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';
import SubTitleText from 'components/SubTitleText';


let ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

let BtnList = styled.ul`
  display: flex;
  justify-content:space-between;
  align-items: center;

   li{
    width: 49%;
  }
`

let Cat = styled.p`
  font-size: 30vh;
  margin: 10% auto 0 auto;
  display: flex;
  justify-content: center;
`

const Share = () => {
  return (
    <ShareBox>
      <TitleText text={'프로젝트 완성!'} marginBottom={5}></TitleText>
      <SubTitleText text={'친구에게 공유하고 함께 운동해요!'}></SubTitleText>
      <Cat>¢</Cat>
      <BtnList className='btnList'>
        <li>
          <Button text={'공유하기'}></Button>
        </li>
        <li>
          <Button text={'운동하기'} link={'/play'}></Button>
        </li>
      </BtnList>
    </ShareBox>
  )
}
export default Share;
