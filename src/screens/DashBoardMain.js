import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { Modal, Typography, Box } from "@mui/material"
import api from '../api/api'


const style = {
    position: 'absolute',
    height: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid white',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};






const DashBoardMain = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [nameErr, setNameErr] = useState(false);
    const [descErr, setDescErr] = useState(false);
    const [amountErr, setAmountErr] = useState(false);
    const [amountErr2, setAmountErr2] = useState(false);
    const [dateErr, setDateErr] = useState(false);
    const [Date, setDate] = useState('');
    const category = useRef();
    const tranType = useRef();
    const price = JSON.parse(localStorage.getItem("value"));
    const Uname = JSON.parse(localStorage.getItem("name"));
    const current = JSON.parse(localStorage.getItem("current"));
    const token = JSON.parse(localStorage.getItem("token"));
    // console.log(price)
    const addTrans = () => {
        console.log("click")
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("value");
        localStorage.removeItem("name");
        localStorage.removeItem("current");
        localStorage.removeItem("expense");
        localStorage.removeItem("income");
        navigate("/");
        window.location.reload();
    }
    const handleTrans = async () => {
        console.log(name, Date, category.current.value, tranType.current.value, description, amount)
        setNameErr(false);
        setAmountErr(false);
        setDateErr(false);
        setDescErr(false);
        setAmountErr2(false);
        if(name === '' && amount === 0 && Date === '' && description===''){
            setNameErr(true);
            setAmountErr(true);
            setDateErr(true);
            setDescErr(true);
            // setAmountErr2(true);
        }
        if (name === '') {
            setNameErr(true);
        }
        if (description === '') {
            setDescErr(true);
        }
        if(amount === 0){
            setAmountErr(true);
        }
        if(amount < 0){
            setAmountErr2(true);
        }
        if (Date === '') {
            setDateErr(true);
        }
        if(amount === 0){
            setAmountErr(true);
        }
        if (name !== '' && Date !== '' && category.current.value !== null && tranType.current.value !== null && amount !== 0) {
            try {
                const res = await api.post("/transaction/new", {
                    name,
                    description,
                    amount: Number(amount),
                    Date,
                    category: category.current.value,
                    tranType: tranType.current.value
                },
                    { headers: { token: token } }
                )
                console.log(res);
                localStorage.removeItem("current")
                localStorage.removeItem("expense")
                localStorage.removeItem("income")
                localStorage.setItem("current", JSON.stringify(res.data.currentBalance))
                localStorage.setItem("expense", JSON.stringify(res.data.totalExpense))
                localStorage.setItem("income", JSON.stringify(res.data.totalIncome))
                setOpen(false);
                setName('')
                setDescription('')
                setAmount('');
                setDate('');
                category.current.value = null;
                tranType.current.value = null;
                window.location.reload();
            } catch (error) {
                console.log('Ye error hai', error);
            }
        }
        else {
            console.log('hyee')
        }
    }
    return (
        <div style={{ width: '100%' }}>
            <div className='dashboardMain'>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <div>
                        <p>Welcome back,</p>
                        <h2>Hi, {Uname}</h2>
                    </div>
                    <div style={{ display: 'flex', gap: 5 }}>
                        <button onClick={addTrans} style={{ padding: '10px 30px' }} className='btn2'>Add Transactions</button>
                        <button onClick={handleLogout} className='btn2' style={{ padding: '10px 30px', background: '#f0fdf8', color: '#2db84c' }}>Logout</button>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div>
                            <h2>Your Budgets :</h2>
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
                                    <p>Your current balance</p>
                                    <h2>₹ {current}</h2>
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
                        {/* <div>
                            <div className='expense'>
                                <div></div>
                                <div></div>
                            </div>
                        </div> */}
                        <div>
                            <BarChart />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div className='pieChart'>
                            <PieChart />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className="modalDiv">
                        <Typography variant='h4'>Add Transactions</Typography>
                        <div className='hr'></div>
                        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                                <div className='formDiv'>
                                    <label>Transaction Name</label>
                                    <br />
                                    <input value={name} onChange={(e) => setName(e.target.value)} className='formInput' type={"text"} />
                                    {nameErr && <p style={{ color: 'red', marginBottom: -20 }}>Required*</p>}
                                </div>
                                <div className='formDiv'>
                                    <label>Description</label>
                                    <br />
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} className='formInput' type={"text"} />
                                    {descErr && <p style={{ color: 'red', marginBottom: -20 }}>Required*</p>}
                                </div>
                                <div className='formDiv'>
                                    <label>Amount</label>
                                    <br />
                                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className='formInput' type={"number"} />
                                    {amountErr && <p style={{ color: 'red', marginBottom: -20 }}>Required*</p>}
                                    {amountErr2 && <p style={{ color: 'red', marginBottom: -20 }}>Value should be positive</p>}
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, marginTop: 10, width: '95%' }}>
                                <div style={{ width: '75%', marginRight: 55 }} className='formDiv'>
                                    <label>Date</label>
                                    <br />
                                    <input value={Date} onChange={(e) => setDate(e.target.value)} className='formInput' style={{ width: '120%' }} type={"date"} />
                                    {dateErr && <p style={{ color: 'red', marginBottom: -20 }}>Required*</p>}
                                </div>
                                <div className='label' style={{ width: '100%' }}>
                                    <label>Category</label>
                                    <br />
                                    <select ref={category} style={{ width: '100%' }} name="category" id="category">
                                        <option value="Food">Food</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Rentals">Rentals</option>
                                        <option value="Work">Work</option>
                                        <option value="PocketMoney">Pocket Money</option>
                                        <option value="Freelance">Freelance</option>
                                        <option value="Internet">Internet Bill</option>
                                        <option value="Other">Others</option>
                                    </select>
                                </div>
                                <div className='label' style={{ width: '100%' }}>
                                    <label>Transaction Type</label>
                                    <br />
                                    <select ref={tranType} style={{ width: '100%' }} name="category" id="category">
                                        <option value="Income">Income</option>
                                        <option value="Expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', bottom: 10, display: 'flex', gap: '10px', right: 40 }}>
                                <button onClick={handleClose} style={{ padding: '10px 30px' }} className='btn2'>Cancel</button>
                                <button onClick={handleTrans} style={{ padding: '10px 30px' }} className='btn2'>Add</button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default DashBoardMain
