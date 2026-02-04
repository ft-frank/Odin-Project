import './bruh.css'
import CartCard from './cartCard.jsx'

const CartContainer = function(props){

    const data = props.data
    const keys = Object.keys(data)
    const handleRemove = props.handleRemove


    return(
    <div id = "cartContainer">
                {
            keys.map((key) => {
            return new Array(data[key][1]).fill('').map((_, index) => 
                <CartCard 
                key={index}  // Add key prop for the inner map
                keyIndex = {key}
                pokeName={data[key][0]} 
                imageURL={data[key][2]}
                handleRemove = {handleRemove}
                />
            )
            })
        }
        </div>
        
    )

}

export default CartContainer