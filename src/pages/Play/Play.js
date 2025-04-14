import React from 'react';
import './Play.css'

const Play = () => {
  return (
    <>
      <h2>방 이름 제목</h2>
      <div>
        <iframe></iframe>
      </div>
      <ul>
        <li>
          <p>염수빈</p><p>연속 <span>3</span>일</p>
          <p>김은수</p><p>연속 <span>3</span>일</p>
          <p>김현선</p><p>연속 <span>3</span>일</p>
          <p>박은혜혜</p><p>연속 <span>3</span>일</p>
        </li>
      </ul>
      <button>오늘 운동 완료</button>
    </>
  )
}
export default Play;
