import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Register = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerErr, setRegisterErr] = useState(false);
    const [registerErr2, setRegisterErr2] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const handleClick = async () => {
        setRegisterErr(false);
        setRegisterErr2(false);
        setEmailErr(false);
        console.log(fullName, email, password)
        const regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        const test = regex.test(email);
        console.log(test);
        if (email !== '' || password !== '') {
            if (test) {
                try {
                    const res = await api.post("/register", {
                        name: fullName,
                        email,
                        password
                    })
                    console.log(res);
                    localStorage.setItem("token", JSON.stringify(res.data.token));
                    localStorage.setItem("name", JSON.stringify(res.data.user.name))
                    localStorage.setItem("current", JSON.stringify(res.data.user.currentBalance))
                    navigate("/form");
                } catch (error) {
                    setRegisterErr(true);
                    console.log(error);
                }
            }
            else {
                setEmailErr(true);
            }
        }
        else {
            setRegisterErr2(true);
        }
    
}
return (
    <AuthComponent
        forgot={{ display: 'none' }}
        title={"register"}
        dont="Login"
        route="/login"
        fullName={fullName}
        registerErr={registerErr}
        registerErr2={registerErr2}
        emailErr={emailErr}
        setFullName={(e) => setFullName(e.target.value)}
        email={email}
        setEmail={(e) => setEmail(e.target.value)}
        password={password}
        setPassword={(e) => setPassword(e.target.value)}
        handleClick={handleClick}
    />
)
}

export default Register
