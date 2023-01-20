import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Forgot = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [forgotErr,setForgotErr] = useState(false);
    const handleClick = async () => {
        setForgotErr(false);
        try {
            await api.post("/password/forgot",{
                email,
            })
            navigate("/reset");
        } catch (error) {
            setForgotErr(true);
        }
    }
    return (
        <AuthComponent
            forgot={{ display: 'none' }}
            title={"Forgot Password"}
            dont="Login"
            route="/login" 
            input={{display:'none'}}
            account={{display:'none'}}
            forgotErr={forgotErr}
            name={{display:'none'}}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            handleClick={handleClick}
            />
    )
}

export default Forgot
