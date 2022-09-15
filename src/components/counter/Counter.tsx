import React, { useState } from "react";

export interface ICounterProps {}

const Counter: React.FunctionComponent<ICounterProps> = (props) => {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h1 className="title">Counter Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(amount)}>Set Counter</button>
        </div>
    );
};

export default Counter;
