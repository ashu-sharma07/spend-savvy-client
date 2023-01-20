import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Logo from "../assets/form/logo.png"

const Reset = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetErr, setResetErr] = useState(false);
    const [resetErr2, setResetErr2] = useState(false);
    const handleClick = async () => {
        setResetErr(false);
        setResetErr2(false);
        if (otp !== '' || password !== '' || confirmPassword !== '') {
            try {
                await api.post("/password/reset", {
                    resetPasswordOtp: otp,
                    password,
                    confirmPassword
                })
                alert("Password Changed Successfully")
                navigate("/login");
            } catch (error) {
                setResetErr(true);
                console.log(error);
            }
        }
        else{
            setResetErr2(true);
        }
    }
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ebebeb', position: 'relative' }}>
            <div className='loginHeader'>
                <img className='logo' src={Logo} alt="Logo" />
            </div>
            <div style={{ marginTop: 20 }} className='authCard'>
                <div>
                    <h1>Reset Password</h1>
                    <div>
                        <h4>Using Money Lover account</h4>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='OTP' type={"text"} />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type={"password"} />
                        <br />
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password' type={"password"} />
                        {resetErr && <p style={{ color: 'red', textAlign: 'center' }}>Password reset OTP is invalid or has expired</p>}
                        {resetErr2 && <p style={{ color: 'red', textAlign: 'center' }}>Please enter all fields</p>}
                        <button onClick={handleClick}>Reset password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
