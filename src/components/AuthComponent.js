import React from 'react'
import { Link } from 'react-router-dom'

const AuthComponent = ({title,dont,route,style}) => {
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
                        <input placeholder='Email' type={"email"} />
                        <br />
                        <input placeholder='Password' type={"password"} />
                        <h4 style={style} className='forgot'>Forgot password</h4>
                        <button>{title}</button>
                        <p>Don't have an account? <Link to={route}>{dont}</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthComponent
