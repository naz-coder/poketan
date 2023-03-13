import React from 'react';
import {AppModalOverlay} from './LandingStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'

const Landing = () => {
  return (
    <React.Fragment>
      <AppModalOverlay>
        <div className='modal-container'>
          <div className='app-header'>
            <img src={mainLogo} className="app-logo"/> 
            <img src={appName} className="app-name"/> 
          </div>
          {/* <label>Enter Name or Number</label> */}
          <div className='poketan-search'>
          <input type="search" placeholder='Pokedex Name or Number'/>
          <button>Search</button>
          </div>
        </div>
      </AppModalOverlay>
    </React.Fragment>
  )
}

export default Landing;
