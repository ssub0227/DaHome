import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let Btn = styled(Link)`
  background-color: var(--brown);
  color: white;
  padding: 1.5vh;
  margin-top: 2vh;
  display: inline-block;
  border-radius: 8px;
  width: 100%;
  font-size: 2.5vh;
  text-align: center;
`

const Button = ({link, text, disabledLink, onClick }) => {
  if(disabledLink){
    return (
      <Btn as='button' onClick={onClick}>{text}</Btn>
    )
  } else {
    return (
      <Btn to={link} onClick={onClick}>{text}</Btn>
    )
  }
}
export default Button;
