import React, {useState} from "react";

const Counter = ({initialCount}: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialCount);

    const delayedCount = () => 
    setTimeout(() => setCounter((counter) => counter + 1), 2000);

    return (
        <div className="center">
        <h1>Counter {counter}</h1>

        {[-1, +1, -50, +50, -100, +100].map((value) => (
            <button onClick={() => setCounter(counter + value)}>{value}</button>
        ))}

        {[<button onClick={() => setCounter(counter + -1)}>{-1}</button>,
        <button onClick={() => setCounter(counter + +1)}>{+1}</button>]}

        <button onClick={delayedCount}>Delayed + 1</button>
        </div>     
    );
};

//use .map() funcrion to dynamically create setCount buttons -1, +1, -50, +50, -100, +100

export default Counter;