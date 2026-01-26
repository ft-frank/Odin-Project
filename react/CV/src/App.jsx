import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import General from './components/general.jsx'
import Educational from './components/educational.jsx'
import Practical from './components/practical.jsx'

import './App.css'

function App() {

  const [data, setData] = useState( {

    "fullName":null,
    "email":null,
    "number":null,
    "school":null,
    "title":null,
    "dateStudy":null,
    "company":null,
    "position":null,
    "description":null 
  } )
    


  const handleFormData = (dataGeneral) => {
      console.log(data)
      console.log(dataGeneral.name)
      setData({...data, "fullName": dataGeneral.name})

          
  }


  const returnData = function () {
      console.log( data )
}

  return (
    <div id = "container">


      <General onFormSubmit = {handleFormData}/>

      <Educational />

      <Practical />

    <button onClick = {returnData}>  
        return
    </button>

    </div>
  )
}

export default App





  // const [count, setCount] = useState(0)


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}