import { useState } from "react";

interface Props {
    items: string[];
    header: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
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
                            onSelectItem(item);
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
