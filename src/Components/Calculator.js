import React, { useState } from "react";

function Calculator() {
    // Create a state variable to store the textarea value
    const [num1Value, setNum1Value] = useState(0);
    const [num2Value, setNum2Value] = useState(0);
    const [total, setTotal] = useState(0);

    // Function to handle changes in the textarea
    const handleNum1Change = (e) => {
        setNum1Value(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2Value(e.target.value);
    };

    const Plusi = () => {
        const num1 = parseFloat(num1Value);
        const num2 = parseFloat(num2Value);

        if (!isNaN(num1) && !isNaN(num2)) {
            setTotal(num1 + num2);
        } else {
            setTotal(0);
        }
    };

    const Minus = () => {
        const num1 = parseFloat(num1Value);
        const num2 = parseFloat(num2Value);

        if (!isNaN(num1) && !isNaN(num2)) {
            setTotal(num1 - num2);
        } else {
            setTotal(0);
        }
    };

    return (
        <div>
            <h1>Rezultati eshte: {total}</h1>
            <input
                value={num1Value}
                onChange={handleNum1Change}
                placeholder="Shkruaj numrin e par."
            />
            <input
                value={num2Value}
                onChange={handleNum2Change}
                placeholder="Shkruaj numrin e dyt."
            />
            <p></p>
            <button onClick={Plusi}>+</button>
            <button onClick={Minus}>-</button>
        </div>
    );
}

export default Calculator;
