import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { LuShoppingCart } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import './style.scss'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}>
                    <li>
                        Home
                    </li>
                </Link>
                <Link to={'/products'}>
                    <li>
                        Products
                    </li>
                </Link>
                <Link to={'/list'}>
                    <li>
                        Menu
                    </li>
                </Link>
                <Link to={'/cart'}>
                    <li>
                        <LuShoppingCart /> Cart
                    </li>
                </Link>
                <Link to={'/'}>
                    <li>
                        Login
                    </li>
                </Link>
                <Link to={'/'}>
                    <li>
                        Logout
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
