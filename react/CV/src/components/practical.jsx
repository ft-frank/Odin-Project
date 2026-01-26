import {useState} from 'react'

export function Practical() {

    const [isOpen, setIsOpen] = useState(false)

    return (

        <>

            <div onClick = {() => setIsOpen(!(isOpen))} className = "card" >
                    General Details
            </div>


        {isOpen && (
            <div className = "component" >
                <form >     
                            <input name = "company" placeholder = "company" type = "text" />


                            <input name = "position" placeholder = "position" type = "text"/>


                            <input name = "description" placeholder = "description" type = "text"/>
                        
                        
                            <button type = "submit"> Submit </button>
                </form>
            </div> )
}      
        </>
    )


}

export default Practical