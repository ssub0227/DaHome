import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from  'components/Footer';
import Home from 'pages/Home';
import Play from 'pages/Play';
import Upload from 'pages/Upload';
import Share from 'pages/Share';
import GlobalStyles from 'styles/reset';
import CommonCSS from 'styles/common';


const App = () => {
  return (
    <div className='App'>
      <GlobalStyles /> 
      <CommonCSS />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/upload" element={<Upload />} />     
          <Route path="/share" element={<Share />} />     
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
