import React, {useEffect} from 'react';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ACTIONS} from "./store/cats/reducer";
import {routes} from "./router/routes";
import './styles/app.scss';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: ACTIONS.FETCH_ITEMS});
    }, [dispatch]);
  return (
    <div className="App">
       <Header/>
        <Routes>
            {routes?.length && routes.map(rout => (
                <Route key={rout.path} path={rout.path} element={rout.element}/>
            ))}
        </Routes>
    </div>
  );
}

export default App;
