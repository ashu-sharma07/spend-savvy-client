import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/form/logo.png"

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
    emailErr,
    loginErr2,
    registerErr,
    registerErr2,
    password,
    setPassword,
    forgotErr,
    forgotErr2,
    name,
    handleClick
}) => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ebebeb', position: 'relative' }}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className='loginHeader'>
                <img style={{width:100}} className='logo' src={Logo} alt="logo" />
                <h2 style={{marginTop:20}} className='logo'>Spend Savvy</h2>
            </div>
            <div style={{marginTop:20}} className='authCard'>
                <div>
                    <h1>{title}</h1>
                    <div>
                        <h4>Using Spend Savvy account</h4>
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
                        {forgotErr && <p style={{ color: 'red',textAlign:'center' }}>Your email is not registered with us.</p>}
                        {forgotErr2 && <p style={{ color: 'red',textAlign:'center' }}>Please Enter email</p>}
                        {loginErr && <p style={{ color: 'red', textAlign: 'center' }}>Invalid Username or password</p>}
                        {loginErr2 && <p style={{ color: 'red', textAlign: 'center' }}>Please enter email or password</p>}
                        {registerErr && <p style={{ color: 'red', textAlign: 'center' }}>Invalid Username or Password</p>}
                        {emailErr && <p style={{ color: 'red', textAlign: 'center' }}>Please Enter correct Email</p>}
                        {registerErr2 && <p style={{ color: 'red', textAlign: 'center' }}>Please enter email or password</p>}
                        <button onClick={handleClick}>{title}</button>
                        <p style={account}>Don't have an account? <Link to={route}>{dont}</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent
