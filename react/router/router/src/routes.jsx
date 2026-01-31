import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App"
import ErrorPage from "./components/ErrorPage"
import Profile from "./components/Profile"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "profile/:name",
    element: <Profile />,

  }


];

export default routes;