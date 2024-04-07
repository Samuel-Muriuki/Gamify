import { useState } from "react";

function App() {
    const [drink, setDrink] = useState({
        title: "Americano",
        price: 5,
    });

    const handleClick = () => {
        // const newDrink = {
        //     title : drink.title,
        //     price: 6,
        // }
        // setDrink(newDrink);
        setDrink({ ...drink, price: 6 }) // This one line replaces the above commented code. Using the spread syntax to iterate through the obj and have access to all the properties
    }

    return (
        <div>
            {drink.price}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;
