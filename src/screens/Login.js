import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErr,setLoginErr] = useState(false);
    const handleClick = async () => {
        setLoginErr(false);
        try {
            const res = await api.post("/login",{
                email,
                password
            })
            console.log(res);
            localStorage.setItem("token",JSON.stringify(res.data.token));
            navigate("/dashboard");
        } catch (error) {
            setLoginErr(true);
            console.log(error);
        }
    }
    return (
        <AuthComponent
            title="Login"
            dont="Register"
            route="/register"
            email={email}
            loginErr={loginErr}
            name={{display:'none'}}
            setEmail={(e) => setEmail(e.target.value)}
            password={password}
            setPassword={(e) => setPassword(e.target.value)}
            handleClick={handleClick}
        />
    )
}

export default Login
