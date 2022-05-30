import React from 'react';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <ul className="header__menu">
                    <NavLink className="header__link header__link-active" to="/">Все котики</NavLink>
                    <NavLink className="header__link" to="/favourites">Любимые котики</NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;
