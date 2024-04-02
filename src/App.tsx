import { useState } from "react";

function App() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState(""); 
    

    const [person, setPerson] = useState({ // Group related variables inside  an object
        firstName: "", // Avoid deeply nested structures
        lastName: "",
    })

    /*  Avoid redundant state variables
        No need to use the state hook to declare another variable 'fullName'
    */
    return (
        <div>
        </div>
    );
}

export default App;
