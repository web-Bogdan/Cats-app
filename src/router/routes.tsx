import {RouteObject} from "react-router-dom";
import Home from "../Pages/Home";
import Favourites from "../Pages/Favourites";

export const routes: RouteObject[] = [
    {path: "*", element: <Home/>},
    {path: "/favourites", element: <Favourites/>}
];
