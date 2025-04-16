import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

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
      <div className='title'>운동 프로젝트 완성!</div>
      <h2 className='title'>프로젝트명</h2>
      <p className='subTitle'>우리 다 같이 운동하는 거야...!</p>
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
