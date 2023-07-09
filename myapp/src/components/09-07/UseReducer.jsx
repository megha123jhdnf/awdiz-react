import React, { useReducer } from 'react'

const reducer = ( state,action) => {

    // console.log(state, "- state")
    // console.log(action, "- action")
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }; 
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        case "PAYLOAD":
            return { count: state.count + action.payload }; 
        default:
            return state;
    }
};

    const UseReducer = () => {
        const initialState = { count: 0 }; 
        const [state, dispatch] = useReducer(reducer, initialState); 

        const increment = () => {
            // console.log("Step 1 - inside incremet function")
            dispatch({ type: "INCREMENT" });
            console.log("Increment")
        };
    
        const decrement = () => {
            dispatch({ type: "DECREMENT" });
            console.log("Decrement")

        };
    
        const reset = () => {
            dispatch({ type: "RESET" });
            console.log("Reset")

        };
    
        const payload = () => {
            dispatch({ type: "PAYLOAD", payload: 98765 })
        }
    
    return (
    <div>
        <h2>Count: {state.count}</h2>
    <button onClick={increment}>Increment</button> 
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    <button onClick={payload}>Add payload</button>  
    </div>
  )
}

export default UseReducer;