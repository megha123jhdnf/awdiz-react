  import React, { useMemo, useState } from "react";
  
const UseMemo = () => {
    const [todos, setTodos] = useState(["hello", "meghali"]);
    const [counter ,setCounter] = useState(0);

    const Number = useMemo(() => {return expensiveCalculation(counter)},[counter])
    function addTodo() {
        setTodos([...todos, "New todo repeat"])
    }

    return(
        <div>
            <h4>Expensive calculation : {Number}</h4>
            <h3>Count : {counter}</h3>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
            <h3>Todos : </h3>
            {todos.map((todo, i) => (
                <h3 key={i} >{todo}</h3>
            ))}
            <button onClick={addTodo}>Add new Todo</button>
        </div>
    )
}

const expensiveCalculation = (number) => {
    console.log(" expensive calculation")
    for (var i = 0; i < 100000; i++) {
        number = number + 1;
    }
    return number;
}

export default UseMemo;