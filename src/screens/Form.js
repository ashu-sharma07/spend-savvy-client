import React from 'react'
import Input from '../components/Input'
import Logo from "../assets/form/logo.png"
const Form = () => {
    const handleClick = async () => {
        console.log("clicked");
    }
    return (
        <div style={{ position: 'relative' }}>
            <div className='loginHeader'>
                <img className='logo' src={Logo} />
            </div>
            <div className='formMain'>
                <div>
                    <div className='formContainer'>
                        <h2 style={{textAlign:'left',width:'100%',color:'rgb(121,121,121)'}}>Welcome to the Budget Building Adventure!</h2>
                        <div style={{ borderTop: '1px solid #e5e5e5',width:'100%',marginBottom:50 }}></div>
                        <div className='formField'>
                            <div>
                                <Input placeholder="" label="Gender" />
                                <Input placeholder="" label="Age" />
                                <Input placeholder=" " label="Study Year" />
                                <Input placeholder="" label="Living" />
                                <Input placeholder="" label="Scholarship" />
                                <Input placeholder=" " label="Part Time Job" />
                            </div>
                            <div>
                                <Input placeholder="" label="Transporting" />
                                <Input placeholder="" label="Smoking" />
                                <Input placeholder="" label="Drinks" />
                                <Input placeholder="" label="Games & Hobbies" />
                                <Input placeholder="" label="Cosmetics & Self-care" />
                                <Input placeholder="Yes or No" label="Any Monthly Subscription" />
                            </div>
                        </div>
                        <button onClick={handleClick} style={{ padding: '10px 30px' }} className='btn'>Next {'-->'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
