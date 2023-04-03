import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))

    

    },[])
    return (
        <div className="small-container">
         <div className="product-container">
        {
            products.map(product => <Product
            key={product.id}
            product ={product}
            ></Product>)
        }


         </div>
         <div className="cart-container">
           <h4>Order Summary </h4>

         </div>

            
        </div>
    );
};

export default Shop;