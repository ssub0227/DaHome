import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

let HomeBox = styled.div`
  text-align: center;
  color: var(--brown);
`

let Intro = styled.div`
  margin:10% 0;
`

const Home = () => {
  return (
    <HomeBox> 
      <Intro>
        <h3 className='title'>
          다 같이 홈트레이닝 프로젝트
          <p className='titleImpact'>다홈</p>
        </h3>
        <p className='subTitle'>원하는 홈트레이닝 영상을 등록하고<br/>친구화 함께 운동해요.</p>
        <Button link={'/upload'} text={'시작하기'}></Button>
      </Intro>
      <Intro>
        <h3 className='title'>운동은 해야 하는데, <br/>밖에 나가기 싫어!</h3>
        <p className='subTitle'>집에서도 쉽게<br/>유튜브 영상으로 운동해요.</p>
      </Intro>
      <Intro>
        <h3 className='title'>혼자서는 못하겠는 홈트레이닝</h3>
        <p className='subTitle'>친구들과 함께라면<br/>무엇이든 할 수 있어요.</p>
        <Button link={'/upload'} text={'영상 등록하기'}></Button>
      </Intro>
    </HomeBox>
  )
}
export default Home;
