import React from 'react';
import styled from 'styled-components';


let Subitle = styled.p`
  font-size:3vh;
  white-space: pre-line;
`

const SubTitleText = ({text}) => {
  return (
    <Subitle>{text}</Subitle>
  )
}

export default SubTitleText;
