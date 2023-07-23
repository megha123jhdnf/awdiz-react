import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./../../context/Auth.Context";



function Login() {
    const {state, login} = useContext(AuthContext);
    // console.log(state,"state from context in login")
    //20

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; // re-assign
                    break;
                }
            }

            if (flag == false) {
                return alert("Please check credentails.")
            } else {

                login(userData)
                alert("Login successfull.");
                setUserData({ email: "", password: "" })
                router('/');
            }
            

        } else {
            alert("Please fill the all details.. ")
        }
    }
    return (
        <div style={{marginLeft:'40%',border:'1px solid grey',width:'30%',paddingLeft:'10%',marginTop:'20px'}}>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />

                <label>Password</label><br />
                <input type="password" name="password" onChange={handleChange} /><br /><br />

                <input style={{width:'40%',height:'20px',marginLeft:'4%',backgroundColor:"skyblue",border:'none',marginBottom:'10px'}} type="submit" value='Login' /><br />
            </form>
            <button onClick={()=>router('/register')}>Register</button>
        </div>
    )
}
export default Login;
 