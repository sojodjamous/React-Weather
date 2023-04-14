import React, { useState } from "react";

export const Chang = (props) => {
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="co">Your User Profile</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="co">New password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" className="s" />
                <button type="submit">Change password</button>
            </form>
        </div>
    )
}