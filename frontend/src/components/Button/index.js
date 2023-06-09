import React from 'react'
import './style.scss'

const Button = ({ title, src, color, backgroundColor }) => {
    return (
        <span
            className='mediaBtn'
            style={{ backgroundColor, color }}>
            <img src={src} alt='' />
            <h6>{title}</h6>
        </span>
    )
}

export default Button
