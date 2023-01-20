import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import AuthComponent from '../components/AuthComponent'

const Forgot = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [forgotErr, setForgotErr] = useState(false);
    const [forgotErr2, setForgotErr2] = useState(false);
    const handleClick = async () => {
        setForgotErr(false);
        setForgotErr2(false);
        if (email !== '') {
            try {
                await api.post("/password/forgot", {
                    email,
                })
                navigate("/reset");
            } catch (error) {
                setForgotErr(true);
            }
        }
        else{
            setForgotErr2(true);
        }
    }
    return (
        <AuthComponent
            forgot={{ display: 'none' }}
            title={"Forgot Password"}
            dont="Login"
            route="/login"
            input={{ display: 'none' }}
            account={{ display: 'none' }}
            forgotErr={forgotErr}
            forgotErr2={forgotErr2}
            name={{ display: 'none' }}
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
            handleClick={handleClick}
        />
    )
}

export default Forgot
