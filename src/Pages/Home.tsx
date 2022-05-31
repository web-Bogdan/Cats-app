import {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import {useDispatch} from "react-redux";
import {ACTIONS, ICat} from "../store/cats/reducer";
import Cat from "../Components/Cat";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Home = () => {
    const dispatch = useDispatch();
    const catsList: ICat[] = useTypedSelector(state => state.catsReducer.catsList);
    const isLoading = useTypedSelector(state => state.catsReducer.isLoading);
    const {ref, inView} = useInView();
    useEffect(() => {
        if (inView && isLoading === false){
            dispatch({type: ACTIONS.FETCH_ITEMS});
        }
    }, [inView]);
    return (
        <div className="container">
            {!isLoading ?
                <>
                <div className="cats">
                    {catsList.map((el) => (
                        <Cat key={el.id} cat={el}/>
                    ))}
                </div>
                <div className="loading" ref={ref}>... загружаем ещё котиков ...</div>
                </>
                :
                <p className="message">... загружаем котиков ...</p>
            }
        </div>
    );
};

export default Home;
