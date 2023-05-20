import React from 'react'
import Pokies from "../../components/pokies/Pokies";
import { HomePageWrap } from '../home/HomeStyle';

const Home = () => {
  return (
    <React.Fragment>
        <HomePageWrap>
        <div className='modal-container'>
          <div className='head-section'>
          <Pokies />
          </div>
        </div>
        </HomePageWrap>
    </React.Fragment>
  )
}

export default Home;