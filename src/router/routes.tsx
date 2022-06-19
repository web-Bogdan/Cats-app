import {RouteObject} from "react-router-dom";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";

export const routes: RouteObject[] = [
    {path: "/", element: <Home/>},
    {path: "/favourites", element: <Favourites/>},
    {path: "*", element: <Home/>}
];
