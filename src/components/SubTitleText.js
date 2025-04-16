import React from 'react';
import styled from 'styled-components';


let Title = styled.p`
  margin-top: 1.5vh;
  font-size:2vh;
  white-space: pre-line;
`

const SubTitleText = ({text}) => {
  return (
    <Title>{text}</Title>
  )
}

export default SubTitleText;
