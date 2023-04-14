import React, { useState } from "react";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
          
     
    
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Your Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
                <label htmlFor="password">Your password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" />
                <button type="submit">Create Account</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login with existing account</button>
        </div>
        </div>
    )
}