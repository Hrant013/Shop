import React, { useEffect, useState } from 'react'
import Product from './Product';


const Products = ({setCart}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(e => console.log("error"))
    }, [])


    return (
        <div>
            <main>
                {data.map((product) => {
                    return (
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            setCart={setCart}
                        />
                    )
                })}
            </main>
        </div>
    )
}

export default Products