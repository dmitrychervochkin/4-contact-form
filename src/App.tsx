import "./App.scss";
import { CommunicationMethods, Form } from "./components";
import { useState } from "react";

function App() {
    const [communicationMethod, setCommunicationMethod] = useState<
        "phone" | "email" | "address"
    >("email");

    return (
        <div className="app">
            <div className="app__title">
                <h1>Get in touch!</h1>
                <p>Contact us for a quote, help of to join the team.</p>
            </div>
            <CommunicationMethods
                communicationMethod={communicationMethod}
                setCommunicationMethod={setCommunicationMethod}
            />
            <Form communicationMethod={communicationMethod} />
        </div>
    );
}

export default App;
