import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Greeting } from './Greeting.jsx'




function List(props) {
  return(

    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("c") ? <li key = {animal}>{animal}</li>: <li>bruh</li>
      }
    
    )}

    </ul>

  )
}

function Appa () {

    const Animals = ["cat", "dog", "cow"]

    return(
      <>
        <h1>Animals: </h1>

        <List animals = {Animals} />
      
      </>
    )
}


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Appa />
  </StrictMode>,

)
