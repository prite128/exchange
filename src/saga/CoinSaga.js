import {EFFECT_GET_COIN} from '../store/reducers/actionTypes'
import {AddCoin} from '../store/reducers/CoinReducer/CoinReducerAction'
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import axios from 'axios';

export function*  CoinChangeWorker (action) {
    let { coinName }    =   action

    if(coinName){
        const {data} = (yield call( axios.get,"https://satangcorp.com/api/v3/ticker/24hr"))
        let coinPrice   =   data.find(el => el.symbol.includes((coinName+"").toLowerCase()))
        if(coinPrice){
            yield put(AddCoin({...coinPrice}))
        }
    }
}

export function* CoinChangeWatcher() {
    yield takeLatest(EFFECT_GET_COIN, CoinChangeWorker)
} 