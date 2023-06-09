import React from 'react'
import './style.scss'
import Main from './main'
import Category from './categories'
import Newsletter from '../../components/Newsletter'
import Discount from './discount'

const Home = () => {
    return (
        <div className='home'>
            <div>
                <Main />
                <Category />
                <Discount />
                <Newsletter />
            </div>
        </div>
    )
}

export default Home
