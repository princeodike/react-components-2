
import { useState } from "react";
import "./PasswordToggle.css";

const PasswordToggle = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="password-container">

            <h1>Password Visibility Toggle</h1>

            <div className="input-container">

                <label htmlFor="password">Password</label>

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </div>

            <button onClick={handleToggle} className="btn">

                {
                    showPassword ? "Hide Password" : "Show Password"
                }

            </button>

        </div>
    );
};

export default PasswordToggle;
