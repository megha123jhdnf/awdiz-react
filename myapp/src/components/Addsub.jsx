import { useState } from "react";

function Addsub(){

    const [counter,setCounter]=useState(0);
    console.log(counter,"/counter")
    function add(){
        setCounter((prevValue)=>prevValue+1)
    }

    function sub(){
        setCounter((prevValue)=>prevValue-1)
    }
    return(
      
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>

    </div>
    )
}
export default Addsub;