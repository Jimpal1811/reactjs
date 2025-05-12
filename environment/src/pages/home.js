import React from 'react';
import Header from '../components/header';
import Imagesection from '../components/imagesection';
import Choose from '../components/whychoose';
// import './home.css;'

const Home= () => {
  return (
    <div className='home'>
      <Header />
      <Imagesection />
      <Choose />
    </div>
  )
}

export default Home;
