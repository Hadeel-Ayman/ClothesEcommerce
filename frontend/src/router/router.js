import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, Login, NotFound, ProductList, Products, Register, SingleProduct } from '../pages'
// import Favorite from '../pages/Favorite'


// const Signup = React.lazy(() => import('../pages'));
// const Login = React.lazy(() => import('../pages'));
// const Home = React.lazy(() => import('../pages'));


const Routerc = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/list' element={<ProductList />} />
            <Route path='/detailes' element={<SingleProduct />} />
            {/* <Route path='/favorite' element={<Favorite />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Routerc
