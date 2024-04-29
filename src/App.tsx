import { useState } from "react";

function App() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });

    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    })

    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1},
        ]
    })

    const handleClick = () => {
        console.log("game: ", game);
        console.log("pizza: ", pizza);
        console.log("cart: ", cart);
        
        setGame({ ...game, player: { ...game.player, name: "Samm" } });

        setPizza({ ...pizza, toppings: [ ...pizza.toppings, "Cheese" ] });

        setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity:item.quantity + 1 } : item) })

        console.log("Game: ", game);
        console.log("Pizza: ", pizza);
        console.log("Cart: ", cart);
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;
