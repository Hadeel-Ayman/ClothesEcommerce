import React, { useEffect, useState } from 'react'
import './style.scss'
import { Localhost } from '../../../config/api'
// images
import OneCategory from './oneCategroy'
import fur from '../../../assets/images/fur.jpg'
import bag from '../../../assets/images/bag.jpg'
import labtop from '../../../assets/images/labtop.jpg'
import shoes from '../../../assets/images/shoes.jpg'
import travel from '../../../assets/images/travel.jpg'
import book from '../../../assets/images/book.jpg'


const Category = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`${Localhost}/category`)
            .then(res => res.json())
            .then(json => setData(json))
    })




    return (
        <div className='category'>
            <h3>Shop Our Top Categories</h3>
            <div className='flex'>
                <OneCategory title={'Furniture'} photo={fur} />
                <OneCategory title={'Hand Bag'} photo={bag} />
                <OneCategory title={'Books'} photo={book} />
                <OneCategory title={'Tech'} photo={labtop} />
                <OneCategory title={'Sneakers'} photo={shoes} />
                <OneCategory title={'Travel'} photo={travel} />
            </div>
        </div>
    )
}

export default Category
