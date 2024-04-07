import { useState } from "react";

function App() {
    const [tags, setTags] = useState(["happy", "cheerful"]);

    const handleClick = () => {
        // Add
        setTags([...tags, "exciting"]);
        // console.log("tags", tags);

        // Remove
        setTags(tags.filter(tag => tag !== "happy"));
        console.log("tags", tags);

        // Update
        setTags(tags.map(tag => tag === "happy" ? "happiness" : tag));
        // console.log("tags", tags);
        
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;
