import React from 'react'
import AuthComponent from '../components/AuthComponent'

const Register = () => {
    return (
        <AuthComponent style={{display:'none'}} title={"register"} dont="Login" route="/login"/>
    )
}

export default Register
