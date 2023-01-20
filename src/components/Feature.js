import React from 'react'

const Feature = ({url}) => {
    return (
        <div className='feature-section-card'>
            <img src={url} alt="card"/>
            <h3>Multiple Devices</h3>
            <p>Safely synchronize across devices with Bank standard security.</p>
        </div>
    )
}

export default Feature
