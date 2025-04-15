import React from 'react';
import './Home.css'
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div className='home'> 
      <div className='intro one'>
        <h3 className='title'>
          다 같이 홈트레이닝 프로젝트
          <p className='title_impact'>다홈</p>
        </h3>
        <p className='intro_sub_title'>원하는 홈트레이닝 영상을 등록하고<br/>친구화 함께 운동해요.</p>
        <Button link={'/upload'} text={'시작하기'}></Button>
      </div>
      <div className='intro two'>
        <h3 className='title'>운동은 해야 하는데, <br/>밖에 나가기 싫어!</h3>
        <p className='intro_sub_title'>집에서도 쉽게<br/>유튜브 영상으로 운동해요.</p>
      </div>
      <div className='intro three'>
        <h3 className='title'>혼자서는 못하겠는 홈트레이닝</h3>
        <p className='sub_title'>친구들과 함께라면<br/>무엇이든 할 수 있어요.</p>
        <Button link={'/upload'} text={'영상 등록하기'}></Button>
      </div>
    </div>
  )
}
export default Home;
