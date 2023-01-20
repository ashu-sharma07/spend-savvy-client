import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Register = () => {
    const navigate = useNavigate();
    const [fullName,setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = async () => {
        console.log(fullName,email,password)
        try {
            const res = await api.post("/register",{
                name:fullName,
                email,
                password
            })
            console.log(res);
            localStorage.setItem("token",JSON.stringify(res.data.token));
            navigate("/form");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <AuthComponent
            forgot={{ display: 'none' }}
            title={"register"}
            dont="Login"
            route="/login" 
            fullName={fullName}
            setFullName={(e)=>setFullName(e.target.value)}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            password={password}
            setPassword={(e) => setPassword(e.target.value)}
            handleClick={handleClick}
            />
    )
}

export default Register
