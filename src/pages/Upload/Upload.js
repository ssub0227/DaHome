import React from 'react';
import './Upload.css'

const Upload = () => {
  return (
    <>
      <input type='text' placeholder='운동방 이름을 입력하세요.'></input>
      <input type='text' placeholder='유튜르 링크를 입력하세요.'></input>
      <button type='submit'></button>
      <div>
        <h2>미리보기</h2>
        <div>
          <iframe></iframe>
          <p>미리보기가 없습니다.</p>
          <p>에러가 발생하였습니다.</p>
        </div>
      </div>
    </>
  )
}
export default Upload;
