import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext } from './../context/Auth.Context';


function Home(){
    const {state,login,logout} = useContext(AuthContext)
    console.log(state,"-state from context in home");
    //20

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    
    useEffect(() => {
      var user = JSON.parse(localStorage.getItem("Current-user"));
      console.log(user, "user")
      if (user) 
      { 
        setIsUserLoggedIn(true);
      }
    },[])
    
    // -18

    useEffect(() =>{
    console.log(state?.user?.email,"state?.user?.email")
        if (state?.user?.email) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
  
    }, [state])

  
    
  //   function logout() {
  //     localStorage.removeItem("Current-user");
  //     setIsUserLoggedIn(false);
  //     alert("Logout Successfull.")
  // }-18

    

    
  return (
    <div style={{textAlign:'center'}}>
    <h1>Welcome to our shop...</h1>
    <div>
        {isUserLoggedIn ? <div onClick={() => logout()}>Logout</div> : <button onClick={() => router('/login')}>Login</button> }
    </div>
      <img src=""/>
    </div>
  )
}

export default Home