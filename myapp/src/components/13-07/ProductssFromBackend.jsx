import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductssFromBackend = () => {

    const [products,setProducts] = useState([]);
    const router= useNavigate()

    console.log(products,"-products")

    useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json)) 
     // .then(json => console.log(json)) 
},[])

     const redirect = (id) =>{
        // console.log(id,"-id")
        // alert("working...")
        router(`/products/${id}`)
     }
  return (
<div>
 <h1>Product :</h1>
 {products.length ? 
 
 <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
  {products.map((pro) => (
    <div onClick={() => redirect(pro.id)} style={{cursor:'pointer',width:"18%",height:'450px',border:'1px solid black',marginBottom:'15px'}}>
        <img style={{width:"80%",height:'250px',marginLeft:"10%",marginTop:'10px'}}src={pro.image} alt="" />
        <h4 style={{marginLeft:'10px'}}>{pro.title}</h4>
        <h3 style={{marginLeft:'10px'}}>Rs.{pro.price}</h3>
    </div>
  ))}
</div>
 
 
 
 : <h1 style={{width:'10'}}>Loading..</h1>}
 
</div>  
)
}

export default ProductssFromBackend