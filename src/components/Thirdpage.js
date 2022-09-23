import React from 'react';
import Button  from '@mui/material/Button';
import TextField  from '@mui/material/TextField';

function Thirdpage() {
  return (
    <div>
            <div className='inner'>
                <TextField label='City' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Landamark' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='Postal code' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' color='primary'>Submit</Button>
            </div>
    </div>
  )
}

export default Thirdpage