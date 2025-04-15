import React from 'react';
import './Share.css'
import Button from '../../components/Button/Button';

const Share = () => {
  return (
    <div className='share'>
      <div className='title'>운동 프로젝트 완성!</div>
      <p className='subTitle'>우리 다 같이 운동하는 거야...!</p>
      <ul className='btnList'>
        <li>
          <Button text={'공유하기'}></Button>
        </li>
        <li>
          <Button text={'홈으로'} link={'/'}></Button>
        </li>
      </ul>
    </div>
  )
}
export default Share;
