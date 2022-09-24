import React, { useContext } from 'react';
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import { diffStepContext } from '../PageContext';

function Thirdpage() {

  const {setStep, data, setData, submitData} = useContext(diffStepContext);


  return (
    <div>
            <div className='inner'>
                <TextField label='City' value={data['city']} onChange={(e) => setData({...data, 'city' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Landamark' value={data['landmark']} onChange={(e) => setData({...data, 'landmark' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Postal code' value={data['postalcode']} onChange={(e) => setData({...data, 'postalcode' : e.target.value})} marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' onClick={() => setStep(2)} color='secondary'>Back</Button>
                <Button variant='contained' color='primary' onClick={submitData} >Submit</Button>
            </div>
    </div>
  )
}

export default Thirdpage