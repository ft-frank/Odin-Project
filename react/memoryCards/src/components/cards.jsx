import {useState, useEffect} from 'react'

export function Card(props) {

    const pokemonName = props.pokemonName
    const handleClick = props.onClick

    return(

        <>



            <div className = "card" onClick = {() => handleClick(pokemonName)}>
                {pokemonName}
            </div>
        
        
        </>

    )
  
}

export default Card