import React from 'react';
import { Link } from 'react-router-dom';
import './Upload.css'
import Button from '../../components/Button/Button';

const Upload = () => {
  return (
    <div className='upload'>
      <h2 className='title'>다홈 프로젝트 생성</h2>
      <input type='text' placeholder='프로젝트 이름을 입력하세요.' name='pj_title_input' id='pj_title_input'></input>
      <input type='text' placeholder='유튜르 링크를 입력하세요.' name='vd_link_input' id='vd_link_input'></input>
      <Button link={'/Share'} text={'운동 프로젝트 생성'}></Button>
      <div className='preview'>
        <h2 className='title'>동영상 미리보기</h2>
        <div className='privewVideo'>
          <div className='videoBox displayNo'>
            <iframe src="https://www.youtube.com/embed/6ZUIwj3FgUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <p className='previewText '><span>미리보기가 없습니다.</span></p>
          <p className='previewText displayNo'><span>에러가 발생하였습니다.</span></p>
        </div>
      </div>
    </div>
  )
}
export default Upload;
