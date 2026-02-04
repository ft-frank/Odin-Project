import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import {useLocation} from 'react-router-dom'
import CartCard from './cartCard.jsx'
import './bruh.css'
import CartContainer from './cartContainer.jsx'


function Cart() {
    const data = JSON.parse(localStorage.getItem("pokemonChosen"))
    console.log(data)
    const keys = Object.keys(data)

    const handleRemove = function(key) {
        if (data[key][1] > 0){
            data[key][1] -= 1
            console.log(data[key])}

    }

    useEffect(()=>{
        
        localStorage.setItem("pokemonChosen", JSON.stringify(data))


    }, [data])

return (
    <div > 
        {keys.length == 0 && <h1>bruh shopping cart is empty</h1>}
        <Link to = "/" onClick = {console.log(data)}>
                        Back to Shop
        </Link>
        

    <CartContainer data = {data} handleRemove = {handleRemove}/>

    </div>
  )

}
export default Cart
