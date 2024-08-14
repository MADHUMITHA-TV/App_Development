import React, { useState } from "react";
import '../../Assets/CSS/style.css';
import { Link } from "react-router-dom";

function ALogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-body">
            <div className="login-main">
                <h1>LOGIN</h1>
                
                <br />
                <p>Email :</p>
                <input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <p>Password :</p>
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <span className="checkmark"></span>
                    Show Password
                </label>
                <br />
                <div className="ad">
                <button><Link to='/admin'>Login</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ALogin;
