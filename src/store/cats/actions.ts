import {ACTIONS, ICat} from "./reducer";

export const setLoading = () => ({type: ACTIONS.INITIAL_LOADING});
export const setCats = (payload: ICat[]) => ({type: ACTIONS.FETCH_SUCCESS, payload: payload});
export const setError = (payload: string) => ({type: ACTIONS.FETCH_ERROR, payload: payload});
