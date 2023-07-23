import React, { useEffect} from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
     const [currentUserEmail,setCurrentUserEmail] = useState("");
    const [products,setProducts] = useState([]);
    const  [singleProduct, setSingleProduct] = useState({});
    const {id} = useParams();
    const router = useNavigate();
    // console.log(products,"- products")

    useEffect(() => { 
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json)) 
    },[])

    useEffect(() =>{
        if (id && products.length){
          const result = products.find((product) => product.id == id)
          //  console.log(result,"- result")
           setSingleProduct(result)
        }
    }, [id, products])

    useEffect(() => {
      var user = JSON.parse(localStorage.getItem("Current-user"));
      console.log(user,"-user")

      if (user){
      setIsUserLoggedIn(true)
      setCurrentUserEmail(user.email)

      }
  },[])

    console.log(singleProduct,"-singleProduct")
    

    function addCart() {
      if (isUserLoggedIn) {
          const users = JSON.parse(localStorage.getItem("Users"));
           const currentUser = JSON.parse(localStorage.getItem("Current-user"))
          for (var i = 0; i < users.length; i++) {
              if (users[i].email == currentUser.email && users[i].password == currentUser.password) {
                //task check product present in cart
                  users[i].cart.push(singleProduct);
                  localStorage.setItem("Users", JSON.stringify(users));
                  break;
              }
          }
          alert("Product added successfully to cart!")
            router('/productss-from-backend')


       }
        else {
          alert("You cant add product before login...")
      }

  }


  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <div style={{width:'40%' ,height:'300px',border:'4px solid black'}}>
        <img style={{width:'50%',height:'60%',marginLeft:'15%',marginTop:'8%'}} src={singleProduct.image} alt='' />
      </div>
      <div style={{width:'50%' ,height:'600px',border:'4px solid blue'}}>
          <h2 style={{marginLeft:'5%'}}>{singleProduct.title}</h2>
          <p style={{marginLeft:'5%',fontWeight:'600'}}>{singleProduct.description}</p>

          <h3 style={{marginLeft:'5%'}}>Rs.{singleProduct.price}</h3>
          <button onClick={addCart}>Add to cart</button>

      </div>
    </div>
  )
}

export default Product;