import React, { onClick, useState } from "react";

function Bankomati() {
    const [totali, setTotali] = useState(25000);
    const [depozit, setDepozit] = useState("");
    const [terheq, setTerheq] = useState("");

    const Depozitim = () => {
        setTotali(totali + depozit);
        setDepozit(0); // Reset the deposit input to 0
    };

    const handleDepozit = (e) => {
        setDepozit(parseFloat(e.target.value));
    };

    const Terheq = () => {
        setTotali(totali - terheq);
        setTerheq(0); // Reset the deposit input to 0
    };

    const handleTerheq = (e) => {
        setTerheq(parseFloat(e.target.value));
    };

    return (
        <div>
            <h1>Miresevini te Bankomati</h1>
            <h2>Totali juaj eshte: {totali + " Euro"} </h2>
            <h3>Cfare deshironi te beni?</h3>
            <button onClick={Depozitim}>Depozitim</button>
            <input
                type="number"
                value={depozit}
                onChange={handleDepozit}
                placeholder="Sa do depozitoni?"
            />
            <p></p>
            <button onClick={Terheq}>Terheqje</button>
            <input
                type="number"
                value={terheq}
                onChange={handleTerheq}
                placeholder="Sa do terheqesh?"
            />
        </div>
    );
}

export default Bankomati;