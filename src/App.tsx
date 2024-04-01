import ListGroup from "./components/ListGroup";

function App() {
    const items = [
        "New York",
        "Nairobi",
        "Hellsinki",
        "Paris",
        "Tokyo",
        "London",
    ];

    return (
        <div>
            <ListGroup items={items} header={"Cities"} />
        </div>
    );
}

export default App;
