import React, { useState } from 'react'
import App from './App';

export const diffStepContext = React.createContext();

const PageContext = () => {

    const [presentStep, setStep] = useState(1);
    const [data,setData] = useState([]);
    const [finalData, setFinalData] = useState([]);

  return (
    <div>
        <diffStepContext.Provider value={{presentStep, setStep, data, setData, finalData, setFinalData}}>
            <App />
        </diffStepContext.Provider>
    </div>
  )
}

export default PageContext