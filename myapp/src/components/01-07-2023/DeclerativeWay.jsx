import React from 'react';
// const myData = require('./../../../data/myProducts.json');
import myData from './../Data/myProduct.json'

const DeclerativeWay = () => {
    return (
       <div>
                {myData.map((product) =>(

        <div>
            <h1> Name : {product.name}</h1>
            <h2>Description :{product.declaration}</h2>
            <h2>Price : {product.price} Rs.</h2>
        </div>
    ))}                 
         </div>)         
        
                }
                export default DeclerativeWay;
      
