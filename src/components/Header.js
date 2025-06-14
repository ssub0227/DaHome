import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

/* Header.css */
let HeaderBox = styled.header`
  background-color: var(--light-green);
  color: var(--brown);
  height:10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  box-shadow: 1px 1px 10px 1px var(--light-green-shadow);

  ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width: 768px;
    width: 100%;
  }
`

let HeaderText = styled.h1`
  color: var(--brown);
  display: flex;
  align-items: center;
  font-size:5vh;
`


const Header = () =>{
  const isLogin = false;

  return (
    <HeaderBox>
      <ul>
        <li>
          <HeaderText>
            <Link to='/'>
              다홈 £
            </Link>
          </HeaderText>
        </li>
        <li>
          {
            isLogin ? <Link to={'/MyPage'}>마이페이지</Link> : <Link to={'/login'}>로그인</Link>
          }
        </li>
      </ul>
    </HeaderBox>
  );
}

export default Header;