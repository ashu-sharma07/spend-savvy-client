import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import one from "../assets/home/1.svg";
import two from "../assets/home/2.svg";
import three from "../assets/home/3.svg";
import four from "../assets/home/4.svg";
import tran from "../assets/home/tran.png";
import report from "../assets/home/report.png";
import budget from "../assets/home/budget.png";
import FeatureCard from '../components/FeatureCard';
import one1 from "../assets/home/11.svg";
import two2 from "../assets/home/22.svg";
import three3 from "../assets/home/33.svg";
import four4 from "../assets/home/44.svg";
import five5 from "../assets/home/55.svg";
import six6 from "../assets/home/66.svg";
import Feature from '../components/Feature';
import Logo from "../assets/form/logo.png"

const Home = () => {
    return (
        <div>
            <div className='body'>
                <header className='header'>
                    <div>
                        <img style={{ width: 60 }} src={Logo} alt="logo" />
                        <h2 style={{marginLeft:'70px'}} className='logo'>Spend Savvy</h2>
                    </div>
                    <div>
                        {/* <Link to="/ ">About</Link> */}
                        <Button url="/login" title="Login" style={{ padding: '10px 20px', margin: '0 20px', background: '#2db84c', color: 'white' }} />
                    </div>
                </header>
                <div className='hero'>
                    <div>
                        <h1>Simple Way</h1>
                        <h2>to manage<span className='hero-span'> Personal Financies</span></h2>
                        <Button title="Try now" style={{ padding: '13px 60px' }} />
                    </div>
                </div>
                <div>
                    <div className='cards'>
                        <Card url={one} txt={"100% Secured Data"} />
                        <Card url={two} txt={"User Friendly"} />
                        <Card url={three} txt={"Expense Tracker"} />
                        <Card url={four} txt={"AI Powered"} />
                    </div>
                </div>
                <div style={{ marginTop: 200 }}>
                    <FeatureCard url={tran} desc="Track your transactions like a detective on the hunt for clues. Each purchase is a lead that, when pieced together, creates a clear picture of your financial behavior. " title="Track your transactions"/>
                    <FeatureCard style={{flexDirection:'row-reverse'}} url={budget} desc="Get a microscope view of your daily spending with the power of micro transaction tracking. Every penny spent is captured and recorded in real-time, giving you an in-depth understanding of your financial habits." title="Micro Track Transaction"/>
                    <FeatureCard url={report} title="Visual Transaction History" desc="Visualize your transaction history like never before with graphical representation of your spending. See your financial journey come to life through interactive charts and graphs that clearly show where your money is going."/>
                </div>
                <div>
                    <div className='feature'>
                        <h1>Features our users love</h1>
                        <div className='mainCard'>
                            <Feature url={one1} />
                            <Feature url={two2} />
                            <Feature url={three3} />
                        </div>
                        <div className='mainCard'>
                            <Feature url={four4} />
                            <Feature url={five5} />
                            <Feature url={six6} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #e5e5e5' }}></div>
            <div>
                <div className='body'>
                    <div>
                        <div>
                            <p className='copy'>© 2023 Spend savvy. All rights reserved.</p>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
