import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect, useRef } from 'react';


function Login(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        // prepare for sendoff
        const url = "http://localhost:5001/login";
        const headers = {
    
            'Content-Type': 'application/json'
    
        };
        const method = 'POST';
        const body = JSON.stringify(formData);

        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: body
        });
        const data = await response.json();
        const status = data.status;
        console.log(status);
        if (status == false)
        {

            setErrorMessage('Invalid Login Credentials.');

        }
        else
        {

            localStorage.setItem("username", formData.username);
            props.login(formData.username);

        }

    }

    return (
        <>
            <div className = "login">
                <h1>Login</h1>
                <form onSubmit = {handleLogin}>

                    <input type = "text" value = {formData.username} placeholder = "username" onChange = {(e) => setFormData({...formData, username: e.target.value})} />
                    <br />
                    <input type = "password" value = {formData.password} placeholder = "password" onChange = {(e) => setFormData({...formData, password: e.target.value})} />
                    <br />
                    <input type = "submit" value = "login" />

                </form>

                <br />
                <span id = "errorMessage">{errorMessage}</span>

            </div>
        </>
    );
}

export default Login;
