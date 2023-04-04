import './Product.css'
import React from 'react';

const Product = (props) => {
    const {img , name ,seller ,quantity , price} = props.product
    return (
        <div className="product">
        <img src={img}></img>
        <div className="product-info">
            <h6 className="product-name">{name}</h6>
            <p>${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {}</p> 
                
        </div>
        <button className="btn-cart">Add to Cart </button>
       
      
            
        </div>
    );
};

export default Product;