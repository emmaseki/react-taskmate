import React from 'react'
import logo from '../asset/logo.svg'

export const Header = () => {
  return (
    <header>
        <div class="logo">
            <img src={logo} alt="taskmate-logo" />
            <span>Taskmate</span>
        </div>
        <div class="themeSelector">
            <span className='light'></span>
            <span className='medium'></span>
            <span className='dark'></span>
            <span className='gradientOne'></span>
            <span className='gradientTwo'></span>
            <span className='gradientThree'></span>
        </div>
    </header>
  )
}
