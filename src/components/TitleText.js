import React from 'react';
import styled from 'styled-components';


let Title = styled.h2`
  font-size: 4vh;
  margin:10% 0;
  white-space: pre-line;
`

const TitleText = ({text}) => {
  return (
    <Title>{text}</Title>
  )
}

export default TitleText;
