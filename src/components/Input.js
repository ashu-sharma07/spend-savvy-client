import React from 'react'

const Input = ({placeholder,label}) => {
    return (
        <div className='formDiv'>
            <label>{label}</label>
            <br />
            <input className='formInput' type={"text"} placeholder={placeholder} />
        </div>
    )
}

export default Input
