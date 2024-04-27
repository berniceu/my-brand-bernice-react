import React from "react";

const Login = () => {
    return(<>
    <div className="header">
        <header>
            <a href="index.html"><h1>BERNICE</h1></a>
            <button className="toggle"><img src="images/moon.png" alt="dark mode icon" className="moon"/></button>
        </header>
    </div>
    <div className="login-container">
        <div className="title">
            <h1>LOG IN</h1>
        </div>
        <form action="" id="login-form">
            <div className="input-field">
                <input type="email" placeholder="Email Address" className="item" id="email" autocomplete="email"/>
                <div className="error-text">Email Address can't be blank</div>
            </div>
            
            <div className="input-field">
                <input type="password" placeholder="Password" className="item" id="login-password" autocomplete="current-password"/>
                <div className="error-text">Password can't be blank</div>
            </div>

            
            
        </form>
        
        
            <button type="submit" id="login-button">Log In</button>
        
    </div>
    
    </>)
}