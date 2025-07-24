import { Mail, MapPin, Phone } from "lucide-react";
import "./communicationMethods.scss";

interface CommunicationMethodsProps {
    communicationMethod: "phone" | "email" | "address";
    setCommunicationMethod: (method: "phone" | "email" | "address") => void;
}

export const CommunicationMethods = ({
    communicationMethod,
    setCommunicationMethod,
}: CommunicationMethodsProps) => {
    const isCurrent = (method: "phone" | "email" | "address") => {
        return communicationMethod === method;
    };

    const handleCommunicationMethodChange = (
        method: "phone" | "email" | "address"
    ) => {
        setCommunicationMethod(method);
    };

    return (
        <div className="communication-methods">
            <div
                className={`communication-method ${
                    isCurrent("address") ? "current-method" : ""
                }`}
                onClick={handleCommunicationMethodChange.bind(null, "address")}
            >
                <MapPin />
                <p>102 Street 2714 Don</p>
            </div>
            <div
                className={`communication-method ${
                    isCurrent("phone") ? "current-method" : ""
                }`}
                onClick={handleCommunicationMethodChange.bind(null, "phone")}
            >
                <Phone />
                <p>+02 1234 567</p>
            </div>
            <div
                className={`communication-method ${
                    isCurrent("email") ? "current-method" : ""
                }`}
                onClick={handleCommunicationMethodChange.bind(null, "email")}
            >
                <Mail />
                <p>hello@flowbase.com</p>
            </div>
        </div>
    );
};
