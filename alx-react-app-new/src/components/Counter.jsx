import React, { useState } from 'react';
export default function Counter(){
    let [count, setCount] = useState(0);
    return(
        <div>
            <h1>Counter</h1>
            <p>You have clicked {count} times</p>
            <button onClick= {() =>  setCount(prev + 1)}>
                Click me
            </button>
        </div>
    );
}