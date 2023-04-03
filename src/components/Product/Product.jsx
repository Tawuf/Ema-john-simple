import './Product.css'
import React from 'react';

const Product = (props) => {
    const {img , name ,seller ,quantity , price} = props.product
    return (
        <div className="product">
        <img src={img}></img>
            
        </div>
    );
};

export default Product;