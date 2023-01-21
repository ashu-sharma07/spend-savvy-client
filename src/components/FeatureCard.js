import React from 'react'

const FeatureCard = ({ url, style }) => {
    return (
        <div>
            <div className='feature-card' style={style}>
                <div>
                    <img src={url} alt="card" />
                </div>
                <div>
                    <h1>Track your transactions</h1>
                    <p>"Track your transactions like a detective on the hunt for clues. Each purchase is a lead that, when pieced together, creates a clear picture of your financial behavior."</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
