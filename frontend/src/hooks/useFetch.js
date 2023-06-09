import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    })
    return (
        <div>
            
        </div>
    )
}

export default useFetch
