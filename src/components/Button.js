import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({link, text}) => {

  return (
    <Btn to={link}>{text}</Btn>
  )
}

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
export default Button;
