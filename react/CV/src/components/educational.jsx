import {useState} from "react"

export function Education() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className = "card" onClick = {() => setIsOpen(!(isOpen))} >

                    Educational Details

            </div>

            {isOpen &&  (
                <div className = "component">
                    <form>
                            <input name = "school" placeholder = "school name" type = "text" />
                            <input name = "title" placeholder = "title of study" type = "text"/>
                            <input name = "dateStudy" type = "date"/>
                            <button type = "submit"> Submit </button>
                    </form>

                </div> )
            }
        </>



    )


}

export default Education