import TitleText from 'components/TitleText';
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

let ListTitle = styled.p`
  font-size:3vh;
  margin-top:2.5%;
  padding:2.5% 0 2.5% 0;
  border-top:2px dashed var(--brown);
`

let RoomItem = styled.li`
  margin-bottom:5px;
  border-radius:8px;
  padding:1.5vh;
  background-color:var(--light-green-shadow);
`

let RoomItemLink = styled(Link)`
  display: flex;
  justify-content:space-between;
  align-items:center;
  color:#fff;

  span{
    font-weight:800;
  }
`

const MyPage = () => {
  return (
    <div>
      <TitleText text={'염수빈님, 오늘의 운동은?'}></TitleText>
      <div>
        <ListTitle>내 운동 목록</ListTitle>
        <ul>
          <RoomItem>
            <RoomItemLink to={'/Play'}>
              <p>방 이름</p>
              <p>연속 <span>0</span>일차 도전 중</p>
            </RoomItemLink>
          </RoomItem>
          <RoomItem>
            <RoomItemLink to={'/Play'}>
              <p>방 이름</p>
              <p>연속 <span>0</span>일차 도전 중</p>
            </RoomItemLink>
          </RoomItem>
        </ul>
      </div>
    </div>
  )
}
export default MyPage;
