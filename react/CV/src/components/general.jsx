import {useState} from 'react'


function General({onFormSubmit}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleFormData = function (e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        onFormSubmit(data)
    }

    function card() {
        if (isOpen) {
            return <h1>General Details ⛰ </h1>
        }
        else {
            return <h1>General Details ▼ </h1>
        }
    }


    return(
        <>
            <div onClick = {() => {setIsOpen(!(isOpen))}} className = "card" >

                {card()}

            </div>


            {isOpen && (
            <div>
                <form id = "general" onSubmit = {handleFormData}>
            
                    <input  id = "name" placeholder = "name" name = "name" type = "text"/>
                    <input id = "email" placeholder = "email" name = "email" type = "text"/>
                    <input id = "number" placeholder = "number" name = "number" type = "tel"/>
                    <button type = "submit"> Submit </button>

                </form>
            </div> )}

        </>
    )
}

export default General