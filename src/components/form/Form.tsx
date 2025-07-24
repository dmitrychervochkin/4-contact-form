import { EmailForm } from "./components";
import "./form.scss";

interface FormProps {
    communicationMethod: "phone" | "email" | "address";
}

export const Form = ({ communicationMethod }: FormProps) => {
    return (
        <div className="form">
            {communicationMethod === "email" && <EmailForm />}
            {communicationMethod === "phone" && (
                <div className="phone-form">
                    <h4>Contact information</h4>
                    <p>
                        If you want to contact us, please call the number below.
                    </p>
                    <p>
                        Working hours: <strong>Mon-Fri 9:00-18:00</strong>
                    </p>
                    <p>
                        Our number is <strong>+02 1234 567</strong>
                    </p>
                </div>
            )}
            {communicationMethod === "address" && (
                <div className="phone-form">
                    <h4>Address information</h4>
                    <p>
                        If you would like to visit our office, please come to
                        <strong>102 Street 2714 Don</strong> during business
                        hours, <strong>Mon-Fri 9:00-18:00</strong>
                    </p>
                </div>
            )}
        </div>
    );
};
