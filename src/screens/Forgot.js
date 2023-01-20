import React from 'react'
import AuthComponent from '../components/AuthComponent'

const Forgot = () => {
    return (
        <AuthComponent
            forgot={{ display: 'none' }}
            title={"Forogot Password"}
            dont="Login"
            route="/login" 
            input={{display:'none'}}
            account={{display:'none'}}
            />
    )
}

export default Forgot
