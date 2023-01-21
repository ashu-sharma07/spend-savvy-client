import React from 'react'

const Feature = ({url,title,desc}) => {
    return (
        <div className='feature-section-card'>
            <img src={url} alt="card"/>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Feature
