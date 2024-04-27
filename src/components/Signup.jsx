import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="header">
        <header>
            <a onClick={() => navigate(-1)}><h1>BERNICE</h1></a>
            <button className="toggle"><img src="images/moon.png" alt="dark mode icon" className="moon"/></button>
        </header>
    </div>
    <div className="container">
        
        <div className="title">
            <h1>SIGN UP</h1>
        </div>
        <form id="signup-form">
            
            <div className="input-field">
                <input type="text" placeholder="Name" className="item" id="full-name" autocomplete="name"/>
                <div className="error-text">Name can't be blank</div>
            </div>
            <div className="input-field">
                <input type="email" placeholder="Email Address" id="signup-email" className="item" autocomplete="email"/>
                <div className="error-text">Email Address can't be blank</div>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Password" id="passwordInput" title="Password must have 8+ characters, including uppercase, lowercase, number, and special character" required/>
                <div className="checkbox-div">
                    <input type="checkbox" id="show-password" className="show-password"/>
                    <label for="show-password">Show Password</label>
                </div>
                
                <div className="error-text">
                    
                    <div>
                        Enter stronger password
                    </div>
                    
                   
                </div>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Confirm Password" className="passwordInput" id="confirm-password" required/>
                <div className="checkbox-div">
                    <input type="checkbox" id="show-confirm-password" className="show-password"/>
                    <label for="show-password" >Show Password</label>
                </div>
                <div className="error-text" id="repeat">Passwords must match</div>
            </div>

            <button type="submit" id="submit-btn">Submit</button>
        </form>
        
        
    </div>
        </>
    )
}

export default Signup