import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SecondPage() {
  return (
    <div>
            <div className='inner'>
                <TextField label='first name' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='last name' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <TextField label='contact number' marign='normal' variant='outlined' color='secondary'>Hello world</TextField>
            </div>
            <div className='inner'>
                <Button variant='contained' color='primary'>Submit</Button>
            </div>
    </div>
  )
}

export default SecondPage