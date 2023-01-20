import React from 'react'

const FeatureCard = ({ url, style }) => {
    return (
        <div>
            <div className='feature-card' style={style}>
                <div>
                    <img src={url} alt="card" />
                </div>
                <div>
                    <h1>Lorem ipsum dolor sit</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
