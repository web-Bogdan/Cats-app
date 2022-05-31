
export interface ICat {
    breeds: any[];
    height: number;
    id: string;
    isLiked: boolean;
    url: string;
    width: number;
}

export interface ICatsState {
    catsList: ICat[];
    favouriteCats: ICat[];
    isLoading: boolean;
    error: string | null;
}

export enum ACTIONS {
    FETCH_ITEMS = "FETCH_ITEMS",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    LIKE_CLICK = "LIKE_CLICK",
    INITIAL_LOADING = "INITIAL_LOADING"
}

const initialCats: ICatsState = {
    catsList: [],
    favouriteCats: JSON.parse(localStorage.getItem("favouriteCats:") || "[]"),
    isLoading: false,
    error: null
};

interface INITIAL_LOADING {
    type: "INITIAL_LOADING";
}

interface FETCH_ITEMS {
    type: "FETCH_ITEMS";
}

interface FETCH_SUCCESS {
    type: ACTIONS.FETCH_SUCCESS;
    payload: ICat[];
}

interface FETCH_ERROR {
    type: ACTIONS.FETCH_ERROR;
    payload: string
}

interface LIKE_CLICK {
    type: ACTIONS.LIKE_CLICK;
    payload: string
}

type TAction = FETCH_ITEMS | FETCH_SUCCESS | FETCH_ERROR | LIKE_CLICK | INITIAL_LOADING;

export const catsReducer = (state = initialCats, action: TAction) => {
    switch(action.type){
        case ACTIONS.INITIAL_LOADING:
            const isFirstLoading = !state.catsList.length;
            return {...state, isLoading: isFirstLoading};
        case ACTIONS.FETCH_SUCCESS:
            const newCats = action.payload.map(cat => {
                let isLikedCat = false;
                state.favouriteCats.map(el => {
                    if (el.id === cat.id){
                        isLikedCat = true;
                    }
                });
                cat = {...cat, isLiked: isLikedCat};
                return cat;
            });
            return {...state, catsList: [...state.catsList, ...newCats], isLoading: false};
        case ACTIONS.FETCH_ERROR:
            return {...state, error: action.payload, isLoading: false};
        case ACTIONS.LIKE_CLICK:
            const changedCats = state.catsList.map(cat => {
                if (cat.id === action.payload){
                    return {...cat, isLiked: !cat.isLiked};
                }
                return cat;
            });
            const favouriteCats = changedCats.filter(cat => cat.isLiked);
            localStorage.setItem("favouriteCats:", JSON.stringify(favouriteCats));
            return {...state, catsList: changedCats, favouriteCats: favouriteCats};
        default:
            return state;
    }
};


