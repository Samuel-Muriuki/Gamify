import { MouseEvent } from "react";

function ListGroup() {
    const items = [
        "New York",
        "Nairobi",
        "Hellsinki",
        "Paris",
        "Tokyo",
        "London",
    ];

    // Event handler
    const handleClick = (event: MouseEvent) => (console.log(event));

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.length === 0 && <p>No item found</p>}
                {items.map((item, index) => (
                    <li
                        key={item}
                        className="list-group-item"
                        onClick={handleClick} // Just passing a reference, not calling the fn. Calling the fn will be done later at runtime
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
