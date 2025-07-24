import { Mail, Smartphone, UserRound } from "lucide-react";
import "./input.scss";

interface InputProps {
    icon?: "user" | "email" | "phone";
    label: string;
    placeholder: string;
    type?: "input" | "textarea";
    value: string;
    error?: boolean;
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

export const Input = ({
    icon,
    label,
    placeholder,
    value,
    error,
    onChange,
    type = "input",
}: InputProps) => {
    return (
        <div className="input-container">
            <label className="input-container__label">{label}</label>
            <div
                className={`input-container__wrapper ${
                    error ? "error-field" : ""
                }`}
            >
                {icon === "user" && <UserRound className="icon" />}
                {icon === "email" && <Mail className="icon" />}
                {icon === "phone" && <Smartphone className="icon" />}
                {type === "input" && (
                    <input
                        onChange={onChange}
                        value={value}
                        className="input"
                        type="text"
                        placeholder={placeholder}
                    />
                )}
                {type === "textarea" && (
                    <textarea
                        onChange={onChange}
                        value={value}
                        className="textarea"
                        placeholder={placeholder}
                    />
                )}
            </div>
        </div>
    );
};
