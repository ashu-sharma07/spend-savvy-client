import React from 'react'

const FeatureCard = ({ url, style }) => {
    return (
        <div>
            <div className='feature-card' style={style}>
                <div>
                    <img src={url} alt="card" />
                </div>
                <div>
                    <h1>Simple money tracker</h1>
                    <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
