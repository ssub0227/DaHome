import React from 'react';
import styled from 'styled-components';

let FooterBox = styled.footer`
  background-color: var(--light-green);
  color: var(--brown);
  height:5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Footer = () =>{
  return (
    <FooterBox>
      <div>
        Copyright ⓒ 2025, SUBEEN YEOM All rights reserved.
      </div>
    </FooterBox>
  );
}

export default Footer;