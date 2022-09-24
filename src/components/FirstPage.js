import React, { useContext } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './FirstPage.css'
import { diffStepContext } from '../PageContext';

function FirstPage() {

    const {setStep, data, setData} = useContext(diffStepContext);

    return (
        <div>
            <div className='inner'>
                <TextField label='first name' value={data['firstname']} onChange={(e) => setData({...data, 'firstname' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='last name' value={data['lastname']} onChange={(e) => setData({...data, 'lastname' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='contact number' value={data['contact']} onChange={(e) => setData({...data, 'contact' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' onClick={() => setStep(2)} color='primary'>Next</Button>
            </div>
        </div>
    )
}

export default FirstPage