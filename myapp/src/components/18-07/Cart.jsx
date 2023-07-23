import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [finalPrice,setFinalPrice] = useState(0);
      const [userCart,setUserCart] = useState([]);
    const router = useNavigate();

    console.log(userCart, "- userCart")

    useEffect(()=>{
        if(userCart.length){
            var totalPrice = 0;
            for(var i = 0; i < userCart.length; i++){
                totalPrice += userCart[i].price
            }
            setFinalPrice(totalPrice)
        }
       
    },[userCart])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {

            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {

                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please login to watch all cart products.");
            router('/login')
        }
    }, [])

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0)
        setUserCart([]);
        alert("Thank you")
    }

    return (
        <div>
            
            <div style={{ display: "flex", justifyContent: "space-around"}}>
                <h1>Cart</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: "65%", border: "2px solid black" }}>
                    {userCart && userCart.map((pro) => (
                        <div style={{ width: "20%", border:'1px solid grey', padding: "30px" }}>
                            <img style={{ width: "100%"}} src={pro.image} />
                            <h3>Title : {pro.title}</h3>
                            <h4>Price : {pro.price}</h4>
                        </div>
                    ))}
                </div>
                <div style={{ width: "35%", border: "2px solid black",marginLeft:'25px' }}>
                    <h1>Total </h1>
                    <p>Total MRP : {finalPrice + finalPrice} $ </p>
                    <p>Price after 50% Discount : {finalPrice} $ </p>
                    <button onClick={buyProducts} style={{ width: "80px", height: "40px", backgroundColor: "red", color: "white" }}>Buy Products</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
