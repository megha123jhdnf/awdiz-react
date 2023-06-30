import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type4UseEffectt(){

    const [counter1, setCounter1] = useState(10);
    const [counter2, setCounter2] = useState(20);
    const [counter3, setCounter3 ] = useState(30);

    const router = useNavigate();

    useEffect(()=> {
        console.log("Inside effect")
        if(counter2 == 22){
            router('/')
        }
},[counter2,counter3]);
    return(
        <div>
            <h1>Type4UseEffectt</h1>
            <button onClick={()=> router('/login')}>Redirect to login</button>
            <h1>Counter 1 :{counter1}</h1>
            <button onClick={() => setCounter1((num) => num + 1)}>+ 1 for counter 1</button>
            <h1>Counter 2 :{counter2}</h1>
            <button onClick={() => setCounter2((num) => num + 1)}>+ 1 for counter2</button>
            <h1>Counter 3 :{counter3}</h1>
            <button onClick={() => setCounter3((num) => num + 1)}>+ 1 for counter3</button>
        </div>
    )
} export default Type4UseEffectt;