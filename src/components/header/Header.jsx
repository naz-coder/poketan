import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyle } from '../header/HeaderStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Link to="/">
          <div className='app-header'>
            <img src={mainLogo} className="app-logo"/> 
            <img src={appName} className="app-name"/> 
          </div>
        </Link>
      </div>
    </HeaderStyle>
  )
}

export default Header