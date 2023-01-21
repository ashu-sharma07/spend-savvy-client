import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Modal, Typography, Box } from "@mui/material"

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


const DashboardMedical = () => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));
    const sex = useRef();
    const bmi = useRef();
    const age = useRef();
    const smoker = useRef();
    const children = useRef();
    const region = useRef();
    const [err,setErr] = useState(false);
    const [val,setVal] = useState(0);
    const [open,setOpen] = useState(false);
    const handleClose = ()=>setOpen(false);
    const handleClick = async () => {
        setErr(false);
        console.log(bmi.current.value)
        if (bmi.current.value !== '') {
            try {
                const res = await api.post("/medical", {
                    age: age.current.value,
                    sex: sex.current.value,
                    bmi: bmi.current.value,
                    children: children.current.value,
                    smoker: smoker.current.value,
                    region: region.current.value
                }, { headers: { token: token } })
                console.log(res);
                setVal(res.data.messege);
                setOpen(true);
            } catch (error) {
                console.log(error);
            }
        }
        else{
            setErr(true);
            console.log("Please Enter your BMI")
        }
    }
    return (
        <div style={{ width: '100%', padding: 20 }}>
            <div className=''>
                <div>
                    <div className=''>
                        <h2 style={{ textAlign: 'center', width: '100%', color: 'rgb(121,121,121)' }}>Welcome to the Medical Expense Prediction Adventure!</h2>
                        <div style={{ borderTop: '1px solid #e5e5e5', width: '100%', marginBottom: 50 }}></div>
                        <div className='formField' style={{ padding: 20 }}>
                            <div className='label'>
                                {/* <Input placeholder="" label="Gender" /> */}
                                <label>Gender</label><br />
                                <select ref={sex} name="category" id="category">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
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
                                <div className='formDiv'>
                                    <label>BMI</label>
                                    <br />
                                    <input ref={bmi} className='formInput' type={"number"} placeholder='Enter your BMI' />
                                </div>
                            </div>
                            <div className='label'>
                                <label>How many Children do you have?</label><br />
                                <select ref={children} name="category" id="category">
                                    <option value='0'>0</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>
                                <label>Smoking</label>
                                <br />
                                <select ref={smoker} name="category" id="category">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>

                                <label>Region</label>
                                <br />
                                <select ref={region} name="category" id="category">
                                    <option value="southwest">southwest</option>
                                    <option value="southeast">southeast</option>
                                    <option value="northwest">northwest</option>
                                    <option value="northeast">northeast</option>
                                </select>

                            </div>
                        </div>
                        {err&&<p style={{marginBottom:-30,color:'red'}}>Please enter your BMI</p>}
                        <button onClick={handleClick} style={{ padding: '10px 30px' }} className='btn'>Next {'-->'}</button>
                    </div>
                </div>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className="modalDiv" style={{height:'100%'}}>
                        <Typography variant='h5' style={{textAlign:'center'}}>Your Predicted Expense is:</Typography>
                        <div className='hr'></div>
                        <div style={{height:'100%',width:'100%',display:"flex",justifyContent:'center',alignItems:'center'}}>
                            <div style={{height:100,width:100,background:'#f0fdf8',display:"flex",justifyContent:'center',alignItems:'center',borderRadius:'50%',boxShadow:'2px 2px 10px rgb(0,0,0,0.2),-2px -2px 10px rgb(255,255,255,0.5),inset 2px 2px 10px rgb(0,0,0,0.2),inset -2px -2px 10px rgb(255,255,255,0.5)'}}>
                                <p>{val}</p>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>
            </div>
        </div>
    )
}

export default DashboardMedical
