import React from 'react'

const Reset = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ebebeb', position: 'relative' }}>
            <div className='loginHeader'>
                <h2 className='logo'>Spend Savvy</h2>
            </div>
            <div className='authCard'>
                <div>
                    <h1>Reset Password</h1>
                    <div>
                        <h4>Using Money Lover account</h4>
                        <input placeholder='OTP' type={"text"} />
                        <input placeholder='Password' type={"password"} />
                        <br />
                        <input placeholder='Confirm password' type={"password"} />
                        <button>Reset password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset
