import React from 'react'
import { HeaderStyle } from '../header/HeaderStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'


const Header = () => {
  return (
    <HeaderStyle>
        <div>
        <div className='app-header'>
            <img src={mainLogo} className="app-logo"/> 
            <img src={appName} className="app-name"/> 
        </div>
    </div>
    </HeaderStyle>
  )
}

export default Header