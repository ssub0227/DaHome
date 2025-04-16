import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';
import SubTitleText from 'components/SubTitleText';

let BtnList = styled.ul`
  display: flex;
  justify-content:space-between;
  align-items: center;

   li{
    width: 49%;
  }
`

const Share = () => {
  return (
    <div className='share'>
      <TitleText text={'프로젝트 완성!'}></TitleText>
      <SubTitleText text={'우리 다 같이 운동하는 거야...!'}></SubTitleText>
      <BtnList className='btnList'>
        <li>
          <Button text={'공유하기'}></Button>
        </li>
        <li>
          <Button text={'운동하기'} link={'/play'}></Button>
        </li>
      </BtnList>
    </div>
  )
}
export default Share;
