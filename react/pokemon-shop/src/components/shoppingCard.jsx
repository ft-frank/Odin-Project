import { useState, useEffect } from "react";

const ShopCard = function(props) { 

    const handleClick = props.handleClick

    const pokemonID = props.pokemonID
    if (pokemonID == 0){
        return
    }
    const pokemonInfo = (pokemonID) => {

        const [pokeID, setPokeID] = useState(pokemonID)
        const [pokeName, setPokeName] = useState(null)
        const [pokemonTypes, setPokemonTypes] = useState(null)
        const [pokeWeight, setPokeWeight] = useState(null)
        const [pokeStats, setPokeStats] = useState(null)
        const [imageURL, setImageURL] = useState(null)

        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(true)

        useEffect( () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error")
                }``
                return response.json()
            })
            .then((response) => {
                setPokeName(response["name"])
                setPokemonTypes((response["types"]).map((type) => type["type"]["name"]))
                setPokeWeight(response["weight"])
                setPokeStats(response["stats"])
                setImageURL(response["sprites"]["front_default"])
            }
        )
            .catch((error)=>setError(error))
            .finally(() => setLoading(false));
            }, []);

        return {pokeName, pokemonTypes, pokeWeight, pokeStats, imageURL, error, loading}

        }
        
    
    

    const [count, setCount] = useState(0)
    const {pokeName, pokemonTypes, pokeWeight, pokeStats, imageURL, error, loading} = pokemonInfo(pokemonID);

    useEffect( () => {
        if (count) {
            handleClick(pokemonID, count)
        }
    }, [count]
    )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
    <>

        <div id = "shoppingCard">
                <img src={imageURL} alt={"placeholder text"} />
                <p>Name: {pokeName}</p>
                <p>ID: {pokemonID}</p>
                {pokemonTypes.map((type, index)=> {
                    return <p key = {index}>{type}</p>
                })} 
                <p>Weight: {pokeWeight}</p>
                <p>Count: {count} </p>
                {/* <p>{pokeStats}</p> */}
                <div >
                    <button onClick = {() => {setCount(count + 1)} }>
                            +
                    </button>
                    <button onClick = {() => {if (count>0){setCount(count - 1)}}}>
                            -
                    </button>
                </div>
                
        </div>
    
    </>
    );
    };






export default ShopCard