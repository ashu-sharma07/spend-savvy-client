import React, { useState } from 'react'
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = async () => {
        try {
            const res = await api.post("/login",{
                email,
                password
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthComponent
            title="Login"
            dont="Register"
            route="/register"
            email={email}
            name={{display:'none'}}
            setEmail={(e) => setEmail(e.target.value)}
            password={password}
            setPassword={(e) => setPassword(e.target.value)}
            handleClick={handleClick}
        />
    )
}

export default Login
