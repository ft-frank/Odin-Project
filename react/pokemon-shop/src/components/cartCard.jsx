

const CartCard = function(props) {

    const pokeName = props.pokeName
    const imageURL = props.imageURL
    const handleRemove = props.handleRemove
    const key = props.keyIndex

    return (


        <div className = "cartCard">
            <p>{pokeName}</p>
            <img src = {`${imageURL}`}/>

            <button onClick = {()=>handleRemove(key)}>remove</button>
        </div>
    )

}

export default CartCard