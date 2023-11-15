import React, { useState, useEffect } from "react";

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>Numri esh: {count}</h1>
        </div>
    );
}

export default CounterEffect;
