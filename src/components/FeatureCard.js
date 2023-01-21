import { SubTitle } from 'chart.js'
import React from 'react'

const FeatureCard = ({ url, style,desc,title }) => {
    return (
        <div>
            <div className='feature-card' style={style}>
                <div>
                    <img src={url} alt="card" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
