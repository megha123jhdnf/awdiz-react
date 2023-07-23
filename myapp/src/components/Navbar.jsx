import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { useContext } from 'react';
import {AuthContext} from './../context/Auth.Context';


function Navbar() {
    const {state, login,logout} = useContext(AuthContext);
//   console.log(state,"state from context in navbar")
  //20

    const [user, setUser] = useState({});
    const router = useNavigate();
    console.log(user, "user in profile page")

    //20

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        } 
        else{
            setUser({});
        }
        
    },[state])

    useEffect(() =>{
        const isUserPresent = JSON.parse(localStorage.getItem("Current-user"))
        if(isUserPresent){
            setUser(isUserPresent)
        }
    },[])
    //18

    // function logout(){
    //     localStorage.removeItem("Current-user")
    // }


   //18

    return (
        // <div>
        //     <h1>This is navbar</h1>
        <div style={{ display: 'flex', justifyContent: "space-around", border: "1px solid black", width: '100%', textAlign: "center" }}>
           
            <div style={{ width: "10%" }}>
                <h3 onClick={() => router('/')}>Shopping</h3>
            </div>

            <div style={{ display: 'flex', width: "80%", justifyContent: "right" }}>
                {state?.user?.email ?
                    <>
                        <h3 onClick={() => router('/productss-from-backend')}>Products</h3>
                        <h3 onClick={() => router('/profile')} style={{ marginLeft: "40px" }}>Profile</h3>
                        <h3 onClick={logout} style={{ marginLeft: "40px" }}>Logout </h3>
                        <h3 onClick={()=> router('/cart')} style={{ marginLeft: "40px" }}>Cart</h3>
                   
                        </>
                        :
                        <h3  onClick={() => router('/login')}>Login</h3>
                }
            </div>
        </div>
    )
}
export default Navbar;
 