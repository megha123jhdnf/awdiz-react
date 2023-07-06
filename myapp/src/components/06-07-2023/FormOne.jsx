import React, { useState } from 'react'

const FormOne =() =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(name, "- name")
    console.log(email, "- email")
    console.log(password, "-password")

    function toSetName(event) {
        console.log(event.target.value, "- check");
        setName(event.target.value)
    }


    function toSetEmail(event) {
        console.log(event.target.value, "-check")
        setEmail(event.target.value)
    }


    function toSetPassword(event) {
        console.log(event.target.value,"check")
        setPassword(event.target.value)
    }



    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <form>
                <label >Name :</label>
                <input onChange={toSetName} type="text"  placeholder="Enter name here"/>
                 <br />
                <label >Email :</label>
                <input onChange={toSetEmail} type="email" placeholder="Enter email here"/>
                 <br />
                <label >Password :</label>
                <input  onChange={toSetPassword} type="passward" placeholder="Enter passward here" />
                <br />
                <input type="submit"  value='Register'/>



            </form>
        </div>
    )
}
export default FormOne;