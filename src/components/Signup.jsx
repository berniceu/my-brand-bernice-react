import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
import './login.css';
import moon from '../images/moon.png'



const SignupPost = () => {
    const [signup, setSignup] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const form = e.target;

        const signupData = {
            fullName: form.name.value,
            email: form.email.value,
            password: form.password.value 

        };

        if(form.password.value !== form.passwordconfirm.value){
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        try{
            const res = await fetch('https://my-brand-api-x8z4.onrender.com/users/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(signupData)
            });

            if(res.ok){
                alert('Signed up successfully');
                navigate('/login');
                
            } else {
                setError('Signup failed')
            }

        } catch(err){
            setError(err.message);
            setSignup([]);
        } finally{
            setLoading(false)
            
        }
    }
    

    return(<>
    <form id="signup-form" onSubmit={handleSignup}>
            
            <div className="input-field">
                <input type="text" placeholder="Name" name="name" className="item" id="full-name" autocomplete="name"/>
                <div className="error-text">Name can't be blank</div>
            </div>
            <div className="input-field">
                <input type="email" placeholder="Email Address" name="email" id="signup-email" className="item" autocomplete="email"/>
                <div className="error-text">Email Address can't be blank</div>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Password" name="password" id="passwordInput" title="Password must have 8+ characters, including uppercase, lowercase, number, and special character" required/>
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
                <input type="password" name="passwordconfirm" placeholder="Confirm Password" className="passwordInput" id="confirm-password" required/>
                <div className="checkbox-div">
                    <input type="checkbox" id="show-confirm-password" className="show-password"/>
                    <label for="show-password" >Show Password</label>
                </div>
                <div className="error-text" id="repeat">Passwords must match</div>
            </div>

            <button type="submit" id="submit-btn">{loading ? "Signing Up" : "Sign Up"}</button>
        </form>
    </>)

}

const Signup = () => {
    const navigate  = useNavigate();
    return(
        <>
        <div className="header">
        <header>
            <a href="" onClick={() => navigate(-1)}><h1>BERNICE</h1></a>
            <button className="toggle"><img src={moon} alt="dark mode icon" className="moon"/></button>
        </header>
    </div>
    <div className="container">
        
        <div className="title">
            <h1>SIGN UP</h1>
        </div>
        
        <SignupPost/>
        
    </div>
        </>
    )
}

export default Signup