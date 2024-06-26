import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LoginPost = () => {

    const [login, setLogin ] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            email: form.email.value,
            password: form.password.value

        }

        if(!formData.email || !formData.password){
            setError('Please enter email and password');
            return;
        }
        try{
            const res = await fetch('https://my-brand-api-x8z4.onrender.com/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })

            if(res.ok){
                const data = await res.json();
                const userRole = data.role;
                alert('logged in successfully')

                if(userRole === 'admin'){
                    navigate('/adminpanel')
                } else{
                    navigate('/blogs')
                }
            } else{
                setError('Login failed')
            }

        } catch(err){
            setError(err.message);
            
        } finally{
            setLoading(false);
        }

    }

    return(<>
    {error && <div>{error}</div>}
    <form onSubmit={handleLogin} id="login-form">
            <div className="input-field">
                <input type="email" placeholder="Email Address" name="email" className="item" id="email" autocomplete="email"/>
                <div className="error-text">Email Address can't be blank</div>
            </div>
            
            <div className="input-field">
                <input type="password" placeholder="Password" className="item" id="login-password" name="password" autocomplete="current-password"/>
                <div className="error-text">Password can't be blank</div>
            </div>

            
            <button type="submit" id="login-button">{loading? "Logging In":"Log In"}</button>
        </form>
        
        
            
    </>)
}

const Login = () => {
    const navigate = useNavigate();

    return(<>
    <div className="login">
    <div className="header">
        <header>
            <a onClick={() => navigate(-1)}><h1>BERNICE</h1></a>
     
        </header>
    </div>
    <div className="login-container">
        <div className="title">
            <h1>LOG IN</h1>
        </div>
        <LoginPost/>
        
        
    </div>
    </div>
    
    </>)
}

export default Login;