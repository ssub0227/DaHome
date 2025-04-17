import React from 'react';
import styled from 'styled-components';


let Title = styled.h2`
  font-size: 4vh;
  white-space: pre-line;
  margin-top:${(props) => props.marginTop + "%"};
  margin-bottom:${(props) => props.marginBottom + "%"};
`

const TitleText = ({text, marginTop, marginBottom}) => {
  return (
    <Title marginTop={marginTop} marginBottom={marginBottom}>{text}</Title>
  )
}

export default TitleText;
