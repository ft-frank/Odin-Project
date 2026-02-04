import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import './App.css'
import ShopCard from './components/shoppingCard.jsx'

function App() {

  const prePokemonChosen = JSON.parse(localStorage.getItem("pokemonChosen")) ?? {}

  const [pokemonChosen, changePokemonChosen] = useState(prePokemonChosen)

  const handleClick = function(pokeId, count, imageURL, pokeName) {
      const updated = { ...pokemonChosen };
      updated[pokeId] = [pokeName, count, imageURL];
      changePokemonChosen(updated);
  }

  useEffect(()=> {


  })
  const handleNavigation = () => {
  localStorage.setItem("pokemonChosen", JSON.stringify(pokemonChosen))
}

  const [resetKey, setResetKey] = useState(0)

  return (
    <>
      <button onClick={() => {localStorage.clear();changePokemonChosen({}); setResetKey(prev => prev + 1)}}> Reset Cart</button>
      <Link onClick={handleNavigation} to="/cart" state = {{pokemonChosen: {pokemonChosen}}}>Cart</Link>

      <div id = "pokemonShop">
          {new Array(151).fill('').map((_, index) => <ShopCard key={`${index}-${resetKey}`} pokemonID = {index} handleClick = {handleClick}/>)}
      </div>
    </>
  )
}

export default App
