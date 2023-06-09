import React from 'react'
import './style.scss'

const OneCategory = ({ title, photo }) => {
    return (
        <div className='OneCategory'
            style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
            }}>

            <h4>{title}</h4>
        </div>
    )
}

export default OneCategory
