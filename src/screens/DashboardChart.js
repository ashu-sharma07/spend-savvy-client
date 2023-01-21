import React, { useEffect, useState } from 'react'
import api from '../api/api';
import { Modal, Typography, Box } from "@mui/material"



const style = {
    position: 'absolute',
    height: '400px',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid white',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};



const DashboardChart = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);
    const [trans, setTrans] = useState([]);
    const [open, setOpen] = useState(false);
    const [transOne, setTransOne] = useState([]);
    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const res = await api.get('/transaction/', { headers: { token: token } });
            console.log(res.data.transaction);
            setTrans(res.data.transaction);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const handleClick = async (id) => {
        console.log(id);
        setOpen(true);
        try {
            const res = await api.get(`/transaction/${id}`, { headers: { token: token } });
            console.log(res.data.transaction);
            setTransOne(res.data.transaction);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id) => {
        console.log(id)
        try {
            const res = await api.delete(`/transaction/${id}`, { headers: { token: token } });
            localStorage.removeItem("current")
            localStorage.removeItem("expense")
            localStorage.removeItem("income")
            localStorage.setItem("current", JSON.stringify(res.data.currentBalance))
            localStorage.setItem("expense", JSON.stringify(res.data.totalExpense))
            localStorage.setItem("income", JSON.stringify(res.data.totalIncome))
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    }
    const handleClose = () => setOpen(false);
    useEffect(() => {
        fetchTransactions();
    }, [])
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Transactions History</h1>
                <div className='transDiv'>
                    {
                        loading ?
                            <h1 style={{ textAlign: 'center' }}>Loading....</h1>
                            :
                            trans.map((item, key) => (
                                <div onClick={() => handleClick(item._id)} key={key} style={{ background: '#F9FDFC', boxShadow: "2px 2px 10px rgb(0,0,0,0.2)", marginBottom: 10, borderRadius: 5, padding: 20, cursor: 'pointer' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h3>{item.category}</h3>
                                        {item.tranType === 'Income' ? <p style={{color:'green'}}>₹ {item.amount}</p>:<p style={{color:'red'}}>₹ {item.amount}</p>}
                                    </div>
                                    <div style={{ border: '1px solid #e5e5e5' }}></div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <h3>{item.Date}</h3>
                                    </div>
                                </div>
                            ))
                    }
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
                        <Typography variant='h4'>Transaction details</Typography>
                        <div className='hr'></div>
                        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                            <div style={{ display: 'flex', gap: 10, padding: '60px' }}>
                                <div>
                                    <h2>Category: {transOne.category}</h2>
                                    <h4>Transaction Name: {transOne.name}</h4>
                                    <p>Date: {transOne.Date}</p>
                                    <p>Transaction Type: {transOne.tranType}</p>
                                    <p>Description: {transOne.description}</p>
                                    { transOne.tranType === 'Income'? <h1 style={{color:'green'}}>Amount: ₹ {transOne.amount}</h1>:<h1 style={{color:'red'}}>Amount: ₹ {transOne.amount}</h1>}
                                </div>
                                <div style={{ position: 'absolute', bottom: 10, display: 'flex', gap: '10px', right: 40 }}>
                                    <button onClick={handleClose} style={{ padding: '10px 30px' }} className='btn2'>Cancel</button>
                                    <button onClick={() => handleDelete(transOne._id)} style={{ padding: '10px 30px' }} className='btn2'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default DashboardChart