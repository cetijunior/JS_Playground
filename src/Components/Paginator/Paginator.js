import React, { useState } from "react";

const Pagination = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);


    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlePlus = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleMinus = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => handleClick(i + 1)}>
                        {i + 1}
                    </button>
                ))}
                <p></p>
                <button onClick={handleMinus}>-</button>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    );
};

export default Pagination;
