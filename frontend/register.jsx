import React, { useState } from "react";
import '../../Assets/CSS/style.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const registration = async () => {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
        } else if (password.length < 5) {
            alert('Please enter a password with more than five characters');
        } else {
            setNameErr(false);
            const user = { username: username, email: email, password: password };
            
            try {
                const response = await fetch('http://localhost:8080/reg/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (response.status === 201) {
                    alert("Registration successful!");
                    window.location.href = '/login';
                } else {
                    alert("Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("Error during registration:", error);
                alert("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>Register</h1>
                {nameErr && <p className="errP">Please fill every input field</p>}
                <br />
                <p>Username :</p>
                <input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }}></input>
                <br />
                <p>Email :</p>
                <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <br />
                <p>Password :</p>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                <br />
                <label className="checkbox-container">
                    <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span className="checkmark"></span>
                    Show Password
                </label><br />
                <button onClick={registration}>Register</button>
            </div>
        </div>
    );
}

export default Register;
