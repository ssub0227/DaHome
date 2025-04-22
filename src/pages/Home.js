import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import TitleText from 'components/TitleText';
import SubTitleText from 'components/SubTitleText';
import bg1 from '../assets/main_1.png'
import bg2 from '../assets/main_2.png'
import bg3 from '../assets/main_3.png'

let HomeBox = styled.div`
  text-align: center;
  
  section{
    margin-bottom:5%;
  }

  section:last-child{
    margin-bottom:0;
  }
`

let TitleImpact= styled.p`
  font-size: 5vh;
`
let ImgBox = styled.div`
  width:60vh;  
  margin:5% auto;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  border: 5px dashed var(--yellow);
  border-bottom:none;
  border-radius: 30px 30px 0 0;

  img{
    width:100%;
    
  }
`


const Home = () => {
  return (
    <HomeBox> 
      <section>
        <TitleText text={'다 같이 홈트레이닝'}/>
        <TitleImpact>다홈 £</TitleImpact>
        <ImgBox>
          <img src={bg1} alt='bg1'></img>
        </ImgBox>
        <SubTitleText text={'원하는 홈트레이닝 영상을 등록하고\n친구화 함께 운동해요.'}></SubTitleText>
        <Button link={'/upload'} text={'시작하기'}></Button>
      </section>
      <section>
        <TitleText text={'운동은 해야 하는데, \n밖에 나가기 싫어!'}></TitleText>
        <ImgBox>
          <img src={bg2} alt='bg1'></img>
        </ImgBox>
        <SubTitleText text={'집에서도 쉽게\n유튜브 영상으로 운동해요.'}></SubTitleText>
        <Button link={'/upload'} text={'영상 등록하기'}></Button>
      </section>
      <section>
        <TitleText text={'혼자서는 못하겠는 홈트레이닝'}></TitleText>
        <ImgBox>
          <img src={bg3} alt='bg1'></img>
        </ImgBox>
        <SubTitleText text={'친구들과 함께라면 \n무엇이든 할 수 있어요.'}></SubTitleText>
        <Button link={'/upload'} text={'친구 초대하기'}></Button>
      </section>
    </HomeBox>
  )
}
export default Home;
