import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import DonateCamp from "../Pages/DonateCamp";
import HowToHelp from "../Pages/HowToHelp";
import LogIn from "../Pages/LogIn";
import Dashboard from "../Pages/Dashboard";


export const routes = createBrowserRouter([
    {
        path :'/',
        element :<MainLayout/>,
        children :[
            {
                path :'/',
                element :<Home></Home>
            },
            {
                path :'DonateCamp',
                element :<DonateCamp/>
            },
            {
                path :'HowToHelp',
                element :<HowToHelp/>
            },
            {
                path :'Dashboard',
                element :<Dashboard/>
            },
            {
                path :'LogIn',
                element :<LogIn/>
            }
        ]
    }
])