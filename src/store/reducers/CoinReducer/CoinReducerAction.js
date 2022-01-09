import {EFFECT_GET_COIN,ADD_COIN,CLEAR_COIN_STORE} from '../actionTypes'

export const EffectGetCoin = (coinName) => ({
    type: EFFECT_GET_COIN,
    coinName
});

export const AddCoin = (payload)  => ({
    type: ADD_COIN,
    payload
})
export const ClearCoinStore = () => ({
    type: CLEAR_COIN_STORE
});
