// NameSwitcher.js

import React, { useState } from 'react';

const NameSwitcher = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [result, setResult] = useState('');

    const switchFirstLetters = () => {
        if (firstName.trim() === '' || lastName.trim() === '') {
            setResult('Shkruaj emrin dhe mbiemri cabron!');
            return;
        }

        const switchedFirstName = lastName.charAt(0) + firstName.substring(1);
        const switchedLastName = firstName.charAt(0) + lastName.substring(1);

        setResult(`${switchedFirstName} ${switchedLastName}`);
    };

    return (
        <div>
            <label>
                Shkruaj Emrin:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <br />
            <label>
                Shkruaj Mbiemrin:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <br />
            <button onClick={switchFirstLetters}>Switch</button>
            <br />
            <p>Rezultati: {result}</p>
        </div>
    );
};

export default NameSwitcher;
