
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Generator from "../generator.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/generator',
        Component: Generator
    }
])

export default router