import { useEffect, useState } from "react";

function Type3UseEffectt(){
    const[ counter,setCounter ] = useState(0);
    const[counter2,setCounter2 ] = useState(10);
    useEffect(()=>{
        console.log("Inside use effect")
    },[counter])
    return(
        <div>
            <h1>Type 3 UseEffectt</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((preValue) =>preValue + 1) }>+ 1</button>
            <h1>Counter2 :{counter2}</h1>
            <button onClick={() => setCounter2((preValue) =>preValue +1)}>+ 1 for counter2</button>
        </div>
    )
}
export default Type3UseEffectt;