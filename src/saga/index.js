import {CoinChangeWatcher} from './CoinSaga'
import { all } from "redux-saga/effects";
function* rootSaga() {
    yield all([
        CoinChangeWatcher()
    ])
}

export default rootSaga;