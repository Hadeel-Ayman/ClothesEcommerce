import React from 'react'
import './style.scss'

const OneCategory = ({ title, photo, onClick }) => {
    return (
        <div className='OneCategory'
            onClick={onClick}
            style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
            }}>

            <h4>{title}</h4>
        </div>
    )
}

export default OneCategory
