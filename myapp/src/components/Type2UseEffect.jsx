import { useEffect, useState } from "react";

function Type2UseEffect(){
    const [counter,setCounter] =useState(0)

    useEffect(()=>{
        // it will excute the code oly on first redner of component (first time page open,hard refresh)
        console.log("Inside useEffect!")
        // alert('Welcome')
        //imp  Notification to user
    },[]);
    
    function addCounter(){
        setCounter((preValue) => preValue + 1)


    }
    return(
        <div>
            <h1>Type2UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={addCounter}>Add counter</button>

        </div>
    )
} export default Type2UseEffect;