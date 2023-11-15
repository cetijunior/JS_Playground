import React, { useState } from "react";

function UserReg() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [submit, setSubmit] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            alert("U Kry");
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Password: " + password);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (name.trim() === "") {
            errors.name = "Shkruaj emrin";
        }
        if (!isValidEmail(email)) {
            errors.email = "Nuk bo kjo adresa email";
        }
        if (password.length < 8) {
            errors.password = "Duhet min 8 characters per pass";
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    return (
        <div>
            <h2>Ploteso fushat me te dhenat e duhura</h2>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <p></p>

                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <p></p>

                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <p></p>

                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UserReg;
