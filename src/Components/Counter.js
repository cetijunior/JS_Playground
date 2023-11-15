import React, { useState } from "react";

const Counter = () => {
    const [clicks, setClicks] = useState(0);

    const handleClickpChange = (e) => {
        setClicks(clicks + 1);
    };

    const handleClickmChange = (e) => {
        setClicks(clicks - 1);
        if (clicks === 0) {
            setClicks(0);
        }
    };

    return (
        <div>
            <h1>Shtyp butonin: </h1>

            <input type="number" value={clicks} placeholder="0" />
            <p></p>
            <button onClick={handleClickpChange}>Kliko (+)</button>
            <p></p>
            <button onClick={handleClickmChange}>Kliko (-)</button>
        </div>
    );
}

export default Counter;
