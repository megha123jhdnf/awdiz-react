import React, { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsFromBackend = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    // console.log(products, "- products") find() -single product

@@ -13,6 +15,12 @@ const ProductsFromBackend = () => {
        // .then(json => console.log(json))
    }, [])

    const redirect = (id) => {
        // console.log(id, "- id")
        // alert("Working..")
        router(`/product/${id}`)
    }

    return (
        <div>
            <h1>Products : </h1> const ProductsFromBackend = () => {
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {products.map((pro) => (
                        // onClick={()=> router(`/product/${pro.id}`)}
                        <div style={{ width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
                        <div onClick={() => redirect(pro.id)} style={{ cursor: 'pointer', width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>
                            <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />
                            <h4 style={{ marginLeft: "20px" }} >Name : {pro.title}</h4 >
                            <h3 style={{ marginLeft: "20px" }}>Price : {pro.price}Rs.</h3>
