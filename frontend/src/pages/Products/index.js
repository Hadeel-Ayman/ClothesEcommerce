import Product from "./Product";
import { useEffect, useState } from "react";
import './style.js'
import { Container } from "./style.js";

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    })
    return (
        <Container>
            {data.map((item) => (
                <Product src={item.image} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
