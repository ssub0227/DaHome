import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () =>{
  return (
    <header>
      <h1>
        <Link to='/'>
          {/* <i className='fa-solid fa-house-user'></i> */}
          다홈
        </Link>
      </h1>
    </header>
  );
}

export default Header;