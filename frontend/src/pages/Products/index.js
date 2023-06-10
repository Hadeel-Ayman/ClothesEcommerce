import Product from "./Product";
import { useEffect, useState } from "react";
import './style.js'
import { Container } from "./style.js";
import { Localhost } from "../../config/api";

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`${Localhost}/productCategory`)
            .then(res => res.json())
            .then(json => setData(json))
    })

    return (
        <Container>
            {/* {data && data.data && data.data.map((item) => (
                <Product src={item.images[0]} key={item.id} />
            ))} */}
        </Container>
    );
};

export default Products;
