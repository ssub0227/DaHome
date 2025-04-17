import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';
import SubTitleText from 'components/SubTitleText';

let HomeBox = styled.div`
  text-align: center;
  
  > div{
    margin:5% 0;
  }
`

const Home = () => {
  return (
    <HomeBox> 
      <div>
        <TitleText text={'다 같이 홈트레이닝 프로젝트'}>
          <p className='titleImpact'>다홈</p>
        </TitleText>
        <SubTitleText text={'원하는 홈트레이닝 영상을 등록하고\n친구화 함께 운동해요.'}></SubTitleText>
        <Button link={'/upload'} text={'시작하기'}></Button>
      </div>
      <div>
        <TitleText text={'운동은 해야 하는데, \n밖에 나가기 싫어!'}></TitleText>
        <SubTitleText text={'집에서도 쉽게\n유튜브 영상으로 운동해요.'}></SubTitleText>
      </div>
      <div>
        <TitleText text={'혼자서는 못하겠는 홈트레이닝'}></TitleText>
        <SubTitleText text={'친구들과 함께라면 \n무엇이든 할 수 있어요.'}></SubTitleText>
        <Button link={'/upload'} text={'영상 등록하기'}></Button>
      </div>
    </HomeBox>
  )
}
export default Home;
