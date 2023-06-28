import { Component, useEffect, useState } from "react";

function Type1UseEffect(){
    // When state changes/update,Component re-render on browser
    const [counter,setCounter] =useState(0)
    const [swaraj,setSwaraj] =useState(1234)
    useEffect(()=>{ 
        // it will excute the code when Component re-render on browser
        console.log("Inside useEffect!")
        // alert('welcome')
    });
    function addCounter(){
   setCounter((preValue) => preValue + 1)
    }
    // function addSwaraj(){
    //     setSwaraj ((preValue) => preValue + 1)
    //      }
    return(
        <div>
            <h1>Type1UseEffect</h1>
            <h1>{counter}</h1>
            {/* <button onClick={()=>setCounter((preValue) => preValue + 1)}>Add counter</button> */}
           <button onClick={addCounter}>Add counter</button>
           {/* <h1>{swaraj}</h1>

           <button onClick={addSwaraj}>Add counter</button> */}

        </div>
    )
} export default Type1UseEffect;