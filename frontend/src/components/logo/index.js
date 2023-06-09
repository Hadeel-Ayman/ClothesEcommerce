import React from 'react'
import { BsShop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './style.scss'

const Logo = () => {
    return (
        <div className='LogoApp'>
            <Link to={'/'}>
                <BsShop className='logo' />
                <span> Shopping</span>
            </Link>
        </div>
    )
}

export default Logo
