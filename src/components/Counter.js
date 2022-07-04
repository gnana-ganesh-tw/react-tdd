import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 data-testid="Counter"> Count: {count} </h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                +
            </button>

            <button
                disabled={count === 0}
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
        </>
    );
}

export default Counter;