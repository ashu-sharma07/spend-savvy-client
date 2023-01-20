import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Logo from "../assets/form/logo.png"

const Reset = () => {
    const navigate = useNavigate();
    const [otp,setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleClick = async () => {
        try {
            await api.post("/password/reset", {
                resetPasswordOtp:otp,
                password,
                confirmPassword
            })
            alert("Password Changed Successfully")
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ebebeb', position: 'relative' }}>
            <div className='loginHeader'>
            <img className='logo' src={Logo} alt="Logo"/>
            </div>
            <div style={{marginTop:20}} className='authCard'>
                <div>
                    <h1>Reset Password</h1>
                    <div>
                        <h4>Using Money Lover account</h4>
                        <input value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='OTP' type={"text"} />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type={"password"} />
                        <br />
                        <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm password' type={"password"} />
                        <button onClick={handleClick}>Reset password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
