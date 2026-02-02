import App from "./App.jsx"
import ShopCard from "./components/shoppingCard.jsx"
import ErrorPage from "./error.jsx";
import Cart from "./components/cart.jsx"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

    },{
        path: '/cart',
        element: <Cart />

    },
]

export default routes

