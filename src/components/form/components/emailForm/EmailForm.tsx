import { useState } from "react";
import { Input } from "../input/Input";
import "./emailForm.scss";

const SERVISES_DATA = [
    { id: 1, title: "Web Design" },
    { id: 2, title: "Web Development" },
    { id: 3, title: "Logo Design" },
];

type UserDataField = "name" | "mail" | "phone" | "message";

export const EmailForm = () => {
    const [currentServise, setCurrentService] = useState<string | null>(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [userData, setUserData] = useState<{
        name: string;
        mail: string;
        phone: string;
        message: string;
    }>({
        name: "",
        mail: "",
        phone: "",
        message: "",
    });
    const [error, setError] = useState<string | null>(null);

    const onInputChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        field: UserDataField
    ) => {
        setError(null);
        setUserData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const onSubmit = () => {
        if (currentServise === null) {
            setError("Choose a service");
        } else if (Object.values(userData).includes("")) {
            setError("Fill in the fields!");
        } else {
            const data = JSON.stringify({ ...userData, currentServise });
            console.log(data);

            setIsSubmit(true);
            setCurrentService(null);
            setUserData({
                name: "",
                mail: "",
                phone: "",
                message: "",
            });
            setTimeout(() => {
                setIsSubmit(false);
            }, 3000);
        }
    };

    return (
        <div className="email-form">
            <h4>Contact Form</h4>
            <div className="email-form__header">
                <div className="email-form__header--inputs">
                    <Input
                        value={userData.name}
                        icon="user"
                        label="Your Name"
                        placeholder="Your Name"
                        error={!!error && userData.name === ""}
                        onChange={(e) => onInputChange(e, "name")}
                    />
                    <Input
                        value={userData.mail}
                        icon="email"
                        label="Mail"
                        placeholder="Your Mail"
                        error={!!error && userData.mail === ""}
                        onChange={(e) => onInputChange(e, "mail")}
                    />
                    <Input
                        value={userData.phone}
                        icon="phone"
                        label="Phone"
                        error={!!error && userData.phone === ""}
                        placeholder="Your Phone"
                        onChange={(e) => onInputChange(e, "phone")}
                    />
                </div>
                <div className="email-form__header--message">
                    <Input
                        value={userData.message}
                        type="textarea"
                        label="Message"
                        error={!!error && userData.message === ""}
                        placeholder="Your Message"
                        onChange={(e) => onInputChange(e, "message")}
                    />
                </div>
            </div>
            <div className="email-form__footer">
                <div className="email-form__footer--header">
                    <h4>Services</h4>
                    <p>{currentServise === null && error}</p>
                </div>
                <div className="email-form__footer--services">
                    {SERVISES_DATA.map(({ id, title }) => (
                        <div
                            key={id}
                            className={`service-item ${
                                currentServise === title
                                    ? "current-service"
                                    : ""
                            }`}
                            onClick={() => {
                                setCurrentService(title);
                                setError(null);
                            }}
                        >
                            {title}
                        </div>
                    ))}
                    <div
                        className={`service-item ${
                            currentServise === "other" ? "current-service" : ""
                        }`}
                        onClick={() => {
                            setCurrentService("other");
                            setError(null);
                        }}
                    >
                        Other
                    </div>
                </div>
            </div>
            <div className="email-form__actions">
                <button
                    disabled={!!error || isSubmit}
                    className={`submit-btn ${isSubmit ? "success-btn" : ""}`}
                    onClick={onSubmit}
                >
                    {isSubmit ? "Success!" : "Send Message"}
                </button>
            </div>
        </div>
    );
};
