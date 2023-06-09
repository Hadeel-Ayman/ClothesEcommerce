import React from 'react'
import './style.scss'
import Nav from './navbar';
import Logo from '../../logo';
const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header
