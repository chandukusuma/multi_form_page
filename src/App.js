import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import Thirdpage from './components/Thirdpage';
import { Stepper, StepLabel, Step } from '@mui/material';
import { WebStoriesSharp } from '@mui/icons-material';
import { diffStepContext } from './PageContext';
import { useContext } from 'react';

function App() {

  const {presentStep, finalData} = useContext(diffStepContext);

  function showStep(Step){
    switch(Step){
      case 1 :
        return <FirstPage />
      case 2 :
        return <SecondPage />
      case 3 :
        return <Thirdpage />
    }
  }

  return (
    <div className="App">
      <div>
        <h1 style={{color : 'green', textDecoration : 'underline'}}>Multi_form_page</h1>
      </div>
      <Stepper style={{width: '18%', margin:'auto', padding : '2rem'}} activeStep={presentStep - 1} orientation='horizontal'>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      {showStep(presentStep)}
    </div>
  );
}

export default App;
