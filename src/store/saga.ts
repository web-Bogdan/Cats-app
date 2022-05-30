import {all} from "redux-saga/effects";
import {catsSaga} from "./cats/saga";

export default function* rootSaga(){
    yield all([
        catsSaga()
    ]);
}
