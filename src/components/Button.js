import React from 'react'

const Button = ({style,title}) => {
    return (
        <button style={style} className='btn'>{title}</button>
    )
}

export default Button
