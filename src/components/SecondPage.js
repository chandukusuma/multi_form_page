import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { diffStepContext } from '../PageContext';

function SecondPage() {

  const {setStep, data, setData} = useContext(diffStepContext)

  return (
    <div>
            <div className='inner'>
                <TextField label='Email' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Country' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='District' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' onClick={() => setStep(3)} color='primary'>Submit</Button>
            </div>
    </div>
  )
}

export default SecondPage