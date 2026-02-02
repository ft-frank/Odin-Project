import {Link} from 'react-router'


const ErrorPage = function() {

    return (

        <div>
                <h1>Oh no, this route doesn't exist</h1>

                <Link to = "/" >
                        Back to Shop
                </Link>

        </div>


    )


}

export default ErrorPage;