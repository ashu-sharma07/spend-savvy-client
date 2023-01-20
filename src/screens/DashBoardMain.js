import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pattern from "../assets/form/Pattern.svg"
import Pattern2 from "../assets/form/Pattern2.svg"
import one from "../assets/form/1.svg"
import two from "../assets/form/2.svg"
import three from "../assets/form/3.svg"
import four from "../assets/form/4.svg"
import five from "../assets/form/5.svg"
import six from "../assets/form/6.svg"
import BarChart from './BarChart'
import PieChart from './PieChart'

const DashBoardMain = () => {
    const navigate = useNavigate();
    const price = JSON.parse(localStorage.getItem("value"));
    console.log(price)
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("value");
        navigate("/");
    }
    return (
        <div style={{ width: '100%' }}>
            <div className='dashboardMain'>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <div>
                        <p>Welcome back,</p>
                        <h2>Hi, User</h2>
                    </div>
                    <div style={{display:'flex',gap:5}}>
                        <Link style={{ padding: '10px 30px' }} className='btn2' to="/dashboard">Add Transactions</Link>
                        <button onClick={handleLogout} className='btn2' style={{ padding: '10px 30px',background:'#f0fdf8',color:'#2db84c' }}>Logout</button>
                    </div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div>
                        <div>
                            <h2>Your credit card</h2>
                            <div style={{ display: 'flex', gap: 30 }}>
                                <div className='dashboardCard'>
                                    <p>Your Predicted Budget</p>
                                    <h2>₹ {price}</h2>
                                    <h5>From </h5>
                                    <div style={{ display: 'flex', gap: 5 }}>
                                        <img style={{ position: 'absolute', bottom: 10, left: 20 }} src={one} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 40 }} src={two} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 60 }} src={three} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 80 }} src={four} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 100 }} src={five} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 120 }} src={six} alt="pole" />
                                    </div>
                                    <img className='pattern' src={Pattern} alt="logo" />
                                </div>
                                <div className='dashboardCard2'>
                                    <p>Your Predicted Budget</p>
                                    <h2>₹ {price}</h2>
                                    <h5>From </h5>
                                    <div style={{ display: 'flex', gap: 5 }}>
                                        <img style={{ position: 'absolute', bottom: 10, left: 20 }} src={one} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 40 }} src={two} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 60 }} src={three} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 80 }} src={four} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 100 }} src={five} alt="pole" />
                                        <img style={{ position: 'absolute', bottom: 10, left: 120 }} src={six} alt="pole" />
                                    </div>
                                    <img className='pattern' src={Pattern2} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='expense'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <BarChart />
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
                        <div className='pieChart'>
                            <PieChart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardMain
