import React from 'react';
import {Link} from 'react-router-dom'

const MyPage = () => {
  return (
    <>
      <div><p>염수빈</p>, 오늘의 운동은?</div>
      <div>
        <p>내 운동 목록</p>
        <ul>
          <li>
              <Link to={'/Play'}>
                <p>방 이름</p>
                <p>연속 <span>0</span>일차 도전 중</p>
              </Link>
            </li>
        </ul>
      </div>
    </>
  )
}
export default MyPage;
