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
`

let HeaderText = styled.h1`
  color: var(--brown);
  display: flex;
  align-items: center;
  font-size:5vh;
`

// let HeaderIcon = styled.a`
//   margin-right:10px;
//   font-size: 3vh;
// `

const Header = () =>{
  return (
    <HeaderBox>
      <HeaderText>
        <Link to='/'>
          {/* <HeaderIcon className='fa-solid fa-house-user'></HeaderIcon> */}
          다홈
        </Link>
      </HeaderText>
    </HeaderBox>
  );
}

export default Header;