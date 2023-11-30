import React, { useRef, useEffect, useState } from 'react';

const CountriesGame = () => {

    const data = {
        "Germany": "Berlin",
        "Albania": "Tirana",
        "Malta": "Valleta",
        "USA": "Washington DC",
        "France": "Paris",
        "Japan": "Tokyo"
    };

    const [isClicked, setIsClicked] = useState(false);
    const valuesRef = useRef(Object.entries(data));
    const [entries, setEntries] = useState([]);
    const [state, setState] = useState({
        country: "",
        capital: "",
        duplicateCountry: "",
        duplicateCapital: "",
        wrongVal: false,
        filterData: [],
    });


    const handleClick = () => {
        // Toggle the state when the button is clicked
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        shuffleData(data);
    }, []);

    const shuffleData = (values) => {
        const shuffleObjectKeys = Object.keys(values).sort(() => Math.random() - 0.5);
        const shuffleObjectValues = Object.values(values).sort(() => Math.random() - 0.5);
        const newArr = shuffleObjectKeys.map((ele, index) => ({ [ele]: shuffleObjectValues[index] }));
        const newEntries = Object.assign({}, ...newArr);
        setEntries(Object.entries(newEntries));
    };



    const getFilterData = (val1, val2, currentValues) => {
        let filter = [];
        if (val1) {
            filter = currentValues.filter(
                ([key, _]) => key.toLowerCase() === val1.toLowerCase()
            );
        } else {
            filter = currentValues.filter(
                ([_, val]) => val.toLowerCase() === val2.toLowerCase()
            );
        }
        const find = filter.find(d => d);
        updateState({ filterData: find });
    };

    const add = (val1, val2) => {
        if (!state.country && val1) {
            updateState({ country: val1 });
            getFilterData(val1, null, valuesRef.current);
        } else if (!state.capital && val2) {
            updateState({ capital: val2 });
            getFilterData(null, val2, valuesRef.current);
        } else if (state.country && val1 && !state.duplicateCountry) {
            updateState({ duplicateCountry: val1 });
        } else if (state.capital && val1 && !state.duplicateCapital) {
            updateState({ duplicateCapital: val2 });
        }
        if (state.wrongVal) {
            updateState({
                country: "",
                capital: "",
                duplicateCapital: "",
                duplicateCountry: "",
            });
        }
        updateState({ wrongVal: false });
        check(val1, val2);
    };

    const check = (val1, val2) => {
        const selectedCountry = state.country ? state.country : val1;
        const selectedCapital = state.capital ? state.capital : val2;

        const isCorrectGuess =
            !state.wrongVal &&
            state.filterData[0]?.toLowerCase() === selectedCountry?.toLowerCase() &&
            state.filterData[1]?.toLowerCase() === selectedCapital?.toLowerCase();

        if (isCorrectGuess) {
            const updatedEntries = entries.filter(
                ([key, _]) => key.toLowerCase() !== selectedCountry.toLowerCase()
            );
            setEntries(Object.fromEntries(updatedEntries));
            shuffleData(Object.fromEntries(updatedEntries));
        }

        if (
            !state.wrongVal &&
            state.filterData[0]?.toLowerCase() === selectedCountry?.toLowerCase() &&
            state.filterData[1]?.toLowerCase() === selectedCapital?.toLowerCase()
        ) {
            const removeSelected = valuesRef.current.filter(
                ([key, _]) => key.toLowerCase() !== selectedCountry.toLowerCase()
            );
            updateState({ country: "", capital: "" });
            valuesRef.current = removeSelected;
            shuffleData(Object.fromEntries(removeSelected));
        } else if (state.wrongVal && val1) {
            updateState({ country: val1 });
        } else if (state.wrongVal && val2) {
            updateState({ capital: val2 })
        } else if (state.country || state.capital) {
            updateState({ wrongVal: true });
        }
    };

    const updateState = (values) => {
        setState((prev) => ({
            ...prev,
            ...values,
        }));
    };

    return (
        <div className="App">
            <h1>Loja me tgjetme</h1>
            {entries.length ? (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {entries.map(([key, _]) => (
                            <button
                                key={key}
                                style={
                                    state.country.toLowerCase() === key.toLowerCase() &&
                                        !state.wrongVal
                                        ? { backgroundColor: "#0000ff" }
                                        : (state.country.toLowerCase() === key.toLowerCase() ||
                                            state.duplicateCountry.toLowerCase() === key.toLowerCase()) &&
                                            state.wrongVal
                                            ? { backgroundColor: "#FF0000" }
                                            : {}
                                }
                                onClick={() => add(key, null)}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                    {/* Render capitals in the second row */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        {entries.map(([_, val]) => (
                            <button
                                key={val}
                                style={
                                    state.capital === val && !state.wrongVal
                                        ? { backgroundColor: "#0000ff" }
                                        : (state.capital.toLowerCase() === val.toLowerCase() ||
                                            state.duplicateCapital.toLowerCase() === val.toLowerCase()) &&
                                            state.wrongVal
                                            ? { backgroundColor: "#FF0000" }
                                            : {}
                                }
                                onClick={() => add(null, val)}
                            >
                                {val}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Brrravooo!!</p>
            )}

            <div style={{ display: 'flex', marginTop: "420px", flexDirection: 'column', alignItems: 'center' }}>
                <button onClick={handleClick}>
                    M'kliko
                </button>

                {isClicked && (
                    <p>
                        Bravo
                    </p>
                )}
            </div>

        </div>
    );
};

export default CountriesGame;