import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ style, title, url }) => {
    return (
        <Link style={style} className='btn' to={"/login"}>{title}</Link>
    )
}

export default Button
