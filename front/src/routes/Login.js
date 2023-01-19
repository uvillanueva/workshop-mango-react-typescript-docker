import "./Login.css"
import { useContext } from "react";
import AuthContext from "./../context/AuthContext";
import React from "react";

function Login() {
    const handleSubmit = async e => {
        return null;
    };
    return (
        <div className="login-box">
            <h2> Login </h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="text" id="email" required={true}></input>
                    <label>email</label>
                </div>
                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="password" id="password" required={true}></input>
                    <label>Password</label>
                </div>
                <div className="button-form">
                    <button id="submit">Submit</button>
                    <div id="register">
                        Don't have account ?
                        <a href="/register"> Register</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;