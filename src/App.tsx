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

    const handleSelectItem = (item: string) => {
      console.log(item)
    }

    return (
        <div>
            <ListGroup items={items} header={"Cities"} onSelectItem={handleSelectItem} />
        </div>
    );
}

export default App;
