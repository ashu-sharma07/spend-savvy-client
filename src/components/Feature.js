import React from 'react'

const Feature = ({url}) => {
    return (
        <div className='feature-section-card'>
            <img src={url} alt="card"/>
            <h3>Multiple Devices</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    )
}

export default Feature
