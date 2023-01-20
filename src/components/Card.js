import React from 'react'

const Card = ({url,txt}) => {
    return (
        <div className='card'>
            {/* <img src={require("../assets/1.svg").default} alt="lock" /> */}
            <img src={url} alt="lock" />
            <p>{txt}</p>
        </div>
    )
}

export default Card
