import React from 'react';
import './styles/App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from  './components/Footer/Footer';
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import Upload from './pages/Upload/Upload';
import Share from './pages/Share/Share';

const App = () => {
  return (
    <div className='App'>
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
