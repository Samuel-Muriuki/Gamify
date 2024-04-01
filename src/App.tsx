import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const [alertVisibility, setAlertVisibility] = useState(false);

    return (
        <div className="p-3 m-0 border-0 bd-example m-0 border-0">
            {alertVisibility && (
                <Alert
                    onClose={() => {
                        setAlertVisibility(false);
                        console.log("alertVisibility: ", alertVisibility);
                    }}
                >
                    <div
                        className=" alert-primary d-flex align-items-center alert-dismissible fade show"
                        role="alert"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                            viewBox="0 0 16 16"
                            role="img"
                            width={20}
                            aria-label="Warning:"
                        >
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <div>
                            You're in the presence of the Awe$@mm{" "}
                            <strong>
                                <em>El Samm</em>
                            </strong>
                        </div>
                    </div>
                </Alert>
            )}
            <Button
                color={"danger"}
                onClick={() => {
                    setAlertVisibility(true);
                    console.log("Clicked");
                    console.log("alertVisibility: ", alertVisibility);
                }}
            >
                My Button
            </Button>
        </div>
    );
}

export default App;
