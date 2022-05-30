import {takeEvery, call, put} from "redux-saga/effects";
import {ACTIONS} from "./reducer";
import {CatsApi} from "../../services/api/catsApi";
import {setCats, setError, setLoading} from "./actions";


export function* fetchCatsRequest(){
    yield put(setLoading());
    try{
        // @ts-ignore
        const items = yield call(CatsApi.fetchCats);
        yield put(setCats(items));
    } catch (e: any){
        yield put(setError(e));
    }
}

export function* catsSaga(){
    yield takeEvery(ACTIONS.FETCH_ITEMS, fetchCatsRequest);
}
