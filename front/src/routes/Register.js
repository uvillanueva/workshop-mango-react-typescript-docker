import "./Register.css"
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import React from "react";

function Register() {
    const handleSubmit = async e => {
    };

    return (
        <div className="register-box">
            <h2> Register </h2>
            <form onSubmit={handleSubmit}>

                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="text" id="username" required={true}></input>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="email" id="email" required={true}></input>
                    <label>Email</label>
                </div>

                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="gender" id="gender" required={true}></input>
                    <label>Gender</label>
                </div>

                <div className="user-box">
                    <div style={{ height: "10px" }} />
                    <input type="password" id="password" required={true}></input>
                    <label>Password</label>
                </div>
                <div className="button-form">
                    <button id="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;