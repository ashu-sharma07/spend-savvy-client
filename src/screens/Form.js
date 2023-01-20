import React, { useRef, useState } from 'react'
import Logo from "../assets/form/logo.png"
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigate = useNavigate();
    const gen = useRef();
    const year = useRef();
    const scholar = useRef();
    const living = useRef();
    const age = useRef();
    const part = useRef();
    const transport = useRef();
    const smoke = useRef();
    const drinks = useRef();
    const games = useRef();
    const consmetics = useRef();
    const sub = useRef();
    const handleClick = async () => {
        console.log("clicked");
        console.log(gen.current.value, year.current.value, scholar.current.value,living.current.value,part.current.value,transport.current.value,age)
        navigate("/dashboard");
    }
    return (
        <div style={{ position: 'relative' }}>
            <div className='loginHeader'>
                <img className='logo' src={Logo} />
            </div>
            <div className='formMain'>
                <div>
                    <div className='formContainer'>
                        <h2 style={{ textAlign: 'center', width: '100%', color: 'rgb(121,121,121)' }}>Welcome to the Budget Building Adventure!</h2>
                        <div style={{ borderTop: '1px solid #e5e5e5', width: '100%', marginBottom: 50 }}></div>
                        <div className='formField'>
                            <div className='label'>
                                {/* <Input placeholder="" label="Gender" /> */}
                                <label>Gender</label><br />
                                <select ref={gen} name="category" id="category">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <label>Age</label><br />
                                <select ref={age} name="category" id="category">
                                    <option value='18'>18</option>
                                    <option value='19'>19</option>
                                    <option value='20'>20</option>
                                    <option value='21'>21</option>
                                    <option value='22'>22</option>
                                    <option value='23'>23</option>
                                    <option value='24'>24</option>
                                    <option value='25'>25</option>
                                </select>
                                <label>Study Year</label><br />
                                <select ref={year} name="category" id="category">
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>
                                <label>Living</label>
                                <br />
                                <select ref={living} name="category" id="category">
                                    <option value="Home">Home</option>
                                    <option value="Hostel">Hostel</option>
                                </select>
                                <label>Scholarship</label><br />
                                <select ref={scholar} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <label>Do You have part time job?</label>
                                <br />
                                <select ref={part} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='label'>
                                <label>Transporting</label>
                                <br />
                                <select ref={transport} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="Car">Car</option>
                                </select>
                                <label>Smoking</label>
                                <br />
                                <select ref={smoke} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <label>Drinks</label>
                                <br />
                                <select ref={drinks} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <label>Do you have games & hobbies?</label>
                                <br />
                                <select ref={games} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <label>Cosmetics & Self-care</label>
                                <br />
                                <select ref={consmetics} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <label>Any Monthly Subscription</label>
                                <br />
                                <select ref={sub} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
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
