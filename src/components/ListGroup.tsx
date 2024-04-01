import { useState } from "react";

function ListGroup() {
    const items = [
        "New York",
        "Nairobi",
        "Hellsinki",
        "Paris",
        "Tokyo",
        "London",
    ];

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.length === 0 && <p>No item found</p>}
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={selectedIndex === index ? `list-group-item active` : `list-group-item`}
                        onClick={() => { setSelectedIndex(index) }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
