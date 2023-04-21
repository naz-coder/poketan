import React from 'react'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import Pokies from "../../components/pokies/Pokies";
import { HomePageWrap } from '../home/HomeStyle';


const Home = () => {
  return (
    <React.Fragment>
        <HomePageWrap>
        <div className='modal-container'>
          <div className='head-section'>
          <div className='app-header'>
            <img src={mainLogo} className="app-logo"/> 
            <img src={appName} className="app-name"/> 
          </div>
          <Pokies />
          </div>
        </div>
        </HomePageWrap>
    </React.Fragment>
  )
}

export default Home;