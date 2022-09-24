import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { diffStepContext } from '../PageContext';

function SecondPage() {

  const {setStep, data, setData} = useContext(diffStepContext)

  return (
    <div>
            <div className='inner'>
                <TextField label='Email' value={data['email']} onChange={(e) => setData({...data, 'email' : e.target.value})}  marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Country' value={data['country']} onChange={(e) => setData({...data, 'country' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='District' value={data['district']} onChange={(e) => setData({...data, 'district' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' onClick={() => setStep(1)} color='secondary'>Back</Button>
                <Button variant='contained' onClick={() => setStep(3)} color='primary'>Next</Button>
            </div>
    </div>
  )
}

export default SecondPage