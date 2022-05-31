import React from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ICat} from "../store/cats/reducer";
import SVGSelector from "./SVGSelector";

interface IItemCat {
    cat: ICat;
}

const Cat: React.FC<IItemCat> = ({cat}) => {
    const dispatch = useDispatch();
    // Get cats list from redux
    const catsList = useTypedSelector(state => state.catsReducer.catsList);
    const likeHandler = (e: any) => {
        if (e.target.closest(".cats__like")){
            dispatch({type: "LIKE_CLICK", payload: cat.id});
            localStorage.setItem("catsList", JSON.stringify(catsList.filter(cat => cat.isLiked)));
        }
    }
    return (
        <div className="cats__item" onClick={(e) => likeHandler(e)}>
            <img className="cats__image" src={cat.url} alt={"cat"}/>
            {cat.isLiked ? SVGSelector("LIKE_ACTIVE") : SVGSelector("LIKE")}
        </div>
    );
};

export default Cat;
