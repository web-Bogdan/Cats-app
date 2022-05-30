import React from 'react';
import {Link} from "react-router-dom";
import {ICat} from "../store/cats/reducer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Cat from "../Components/Cat";

const Favourites = () => {
    const favouritesCats: ICat[] = useTypedSelector(state => state.catsReducer.favouriteCats);
    return (
        <div className="container">
                {favouritesCats.length ?
                    <div className="cats">
                        {favouritesCats.map((el) => (
                                <Cat key={el.id} cat={el}/>
                            ))}
                    </div>
                :
                    <p className="message">У вас пока нет любимых пушистиков, но вы можете их <Link className="link" to="/">добавить</Link></p>
                }
        </div>
    );
};

export default Favourites;
