import { useState } from "react";

interface Props {
    items: string[];
    header: string;
}

function ListGroup({ items, header }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{header}</h1>
            <ul className="list-group">
                {items.length === 0 && <p>No item found</p>}
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index
                                ? `list-group-item active`
                                : `list-group-item`
                        }
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
