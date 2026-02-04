import { useState, useEffect } from "react";

const ShopCard = function(props) { 

    const handleClick = props.handleClick
    const reset = props.reset

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
        
    
    
    const preCount = Number(localStorage.getItem(`${pokemonID}`)) ?? 0
    const [count, setCount] = useState(preCount)
    const {pokeName, pokemonTypes, pokeWeight, pokeStats, imageURL, error, loading} = pokemonInfo(pokemonID);

    useEffect( () => {
        if (count && imageURL && pokeName) {
            localStorage.setItem(`${pokemonID}`, count)
            handleClick(pokemonID, count, imageURL, pokeName)
        }
    }, [count, imageURL, pokeName]
    )

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
    <>

        <div id = "shoppingCard">
                <img src={imageURL} alt={"placeholder text"} />
                <p>Name: {pokeName}</p>
                <p>ID: {pokemonID}</p>
                <p>{reset}</p>
                {pokemonTypes.map((type, index)=> {
                    return <p key = {index}>{type}</p>
                })} 
                <p>Weight: {pokeWeight}kg</p>
                <p>Count: {count} </p>
                {/* <p>{pokeStats}</p> */}
                <div>
                    <button onClick = {() => {if (count>0){setCount(count - 1)}}}>
                            -
                    </button>
                    <button onClick = {() => {setCount(count + 1)} }>
                            +
                    </button>
                </div>
                
        </div>
    
    </>
    );
    };






export default ShopCard