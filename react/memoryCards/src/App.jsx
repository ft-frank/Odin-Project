import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from './components/cards.jsx'



function App() {

    const [highScore, setHighScore] = useState(localStorage.getItem("highScore") ?? 0)
    const [currentScore, updateCurrentScore] = useState(0)
    const[pokemonSelected, addPokemonSelected] = useState({})
    const [pokemonGeneration, setPokemonGeneration] = useState(null)
    const [currentPokemonPool, changePool] = useState([])


    useEffect(() => {

        const gen = 1

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) 

        const fetchPokemon = async function (gen) {
            try {
            const response = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`, {
            signal: controller.signal
            })
            clearTimeout(timeoutId)
            const data = await response.json()
            setPokemonGeneration(data["pokemon_species"])
            console.log(data)
        }

            catch (error) {
            console.error("Error:", error)
        } }

        fetchPokemon(gen)

    }, [])




    const randomPokemon = function(length, subList) {
        const randomIndex = (Math.floor(Math.random()  * length))
        const randomPokemonName = pokemonGeneration[randomIndex]["name"]
        if (subList.includes(randomPokemonName)) {
            return randomPokemon(length, subList)
        }
        else {
            return randomPokemonName
        }
    }

    const selectPokemon = function() {

        const length = pokemonGeneration.length
        const subList = []
        for (let i = 0; i < 9; i++) {
          subList.push(randomPokemon(length, subList))
          
        }
        changePool(subList)  

    }

    useEffect(() => {

      if (pokemonGeneration) {
          selectPokemon()}}         
    , [pokemonGeneration] )


    function addPokemon(pokemonName) {
        addPokemonSelected({...pokemonSelected, [pokemonName]: pokemonName})
    }
    
    function handleClick(pokemonName) {
        if (checkIfClicked(pokemonName)) {
            updateCurrentScore(0)
            addPokemonSelected({})
            if (currentScore > highScore) {
                setHighScore(currentScore)
                localStorage.setItem("highScore", highScore)
            }

        }
        else {
          updateCurrentScore(currentScore + 1)
          addPokemon(pokemonName)
          console.log(pokemonSelected)


        }
        selectPokemon()
    }

    function checkIfClicked(pokemonName) {
        if (pokemonSelected.hasOwnProperty(pokemonName)) {
          return true
        }
        else {
          return false
        }
    }

    return (
      <>
          <div id = "currentScore">

                CurentScore:{currentScore}  HighScore: {highScore} Highest Possible Score for this Gen: {151}
                
          </div>
      <div id = "container">
        
        {currentPokemonPool.map((pokemonName) => {

          return <Card key = {pokemonName} pokemonName = {pokemonName} onClick = {handleClick}/>

        })}


      </div>
      </>
    )
  }

export default App
