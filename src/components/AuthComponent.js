import React from 'react'
import { Link } from 'react-router-dom'

const AuthComponent = ({
    title,
    dont,
    route,
    forgot,
    input,
    account,
    fullName,
    setFullName,
    email,
    setEmail,
    loginErr,
    password,
    setPassword,
    forgotErr,
    name,
    handleClick
}) => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ebebeb', position: 'relative' }}>
            <div className='loginHeader'>
                <h2 className='logo'>Spend Savvy</h2>
            </div>
            <div className='authCard'>
                <div>
                    <h1>{title}</h1>
                    <div>
                        <h4>Using Money Lover account</h4>
                        {
                            name ?
                                <input style={name} placeholder='Name' type={"text"} />
                                :
                                <input value={fullName} onChange={setFullName} placeholder='Name' type={"text"} />
                        }
                        <input value={email} onChange={setEmail} placeholder='Email' type={"email"} />
                        <br />
                        <input value={password} onChange={setPassword} style={input} placeholder='Password' type={"password"} />
                        <h4 style={forgot} className='forgot'><Link to="/forgot">Forgot Password</Link></h4>
                        {forgotErr && <p style={{color:'red'}}>Your email is not registered with us.</p>}
                        {loginErr && <p style={{color:'red',textAlign:'center'}}>Your email is not registered</p>}
                        <button onClick={handleClick}>{title}</button>
                        <p style={account}>Don't have an account? <Link to={route}>{dont}</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent
