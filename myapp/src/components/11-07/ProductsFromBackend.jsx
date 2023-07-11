import React, { useEffect, useState } from 'react'

const ProductsFromBackend = () => {

    const [products, setProducts] = useState([]);

    // console.log(products, "- products") find() -single product

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
        // .then(json => console.log(json))
    }, [])

    return (
        <div>
            <h2>Products : </h2>

            {products.length ?
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {products.map((pro) => (
                        // onClick={()=> router(`/product/${pro.id}`)}
                        <div style={{ width: "18%", border: "1px solid grey", height: '330px', marginBottom: "30px" }}>
                            <img style={{ width: "80%", height: "170px", marginLeft: "10%", marginTop: "20px"}} src={pro.image} />
                            <h6 style={{ marginLeft: "10px" }} >Name : {pro.title}</h6 >
                            <h6 style={{ marginLeft: "10px" }}>Price : {pro.price}Rs.</h6>
                        </div>
                    ))}
                </div>
                :
                <h2 style={{ width: "10%", margin: 'auto' }}>Loading...</h2>
            }


        </div>
    )
}

export default ProductsFromBackend