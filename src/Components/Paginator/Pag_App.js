import React, { useState } from "react";
import Pagination from "./Components/Paginator";
import "./App.css"

const App = () => {
    const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
    const itemsPerPage = 5;

    return (
        <div className="body">
            <h1>Paginator System</h1>
            <Pagination items={items} itemsPerPage={itemsPerPage} />
        </div>
    )

};

export default App;