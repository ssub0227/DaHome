import React from 'react';
import {Link} from 'react-router-dom'
import './Button.css'


const Button = ({link, text}) => {

  return (
    <Link to={link} className='btn'>{text}</Link>
  )
}
export default Button;
