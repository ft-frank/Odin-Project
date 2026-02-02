import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import './App.css'
import ShopCard from './components/shoppingCard.jsx'

function App() {

  const [pokemonChosen, changePokemonChosen] = useState({})

  const handleClick = function(pokeId, count) {
      const updated = { ...pokemonChosen };
      updated[pokeId] = count;
      changePokemonChosen(updated);
  
  }



  return (
    <>

      <Link to="/cart" state = {{pokemonChosen: {pokemonChosen}}}>Cart</Link>

      <div id = "pokemonShop">
          {new Array(151).fill('').map((_, index) => <ShopCard key={index} pokemonID = {index} handleClick = {handleClick}/>)}
      </div>
    </>
  )
}

export default App
