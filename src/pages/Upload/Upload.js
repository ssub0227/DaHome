import React from 'react';
import { Link } from 'react-router-dom';
import './Upload.css'

const Upload = () => {
  return (
    <div className='upload'>
      <input type='text' placeholder='운동방 이름을 입력하세요.'></input>
      <input type='text' placeholder='유튜르 링크를 입력하세요.'></input>
      <Link to='/Share'><button type='submit'></button></Link>
      <div>
        <h2>미리보기</h2>
        <div>
          <div>
            <iframe src="https://www.youtube.com/embed/6ZUIwj3FgUY?si=xnoj-K7I8WLBqhKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p>미리보기가 없습니다.</p>
          <p>에러가 발생하였습니다.</p>
        </div>
      </div>
    </div>
  )
}
export default Upload;
