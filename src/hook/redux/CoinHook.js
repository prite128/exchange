import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import {AddCoin,EffectGetCoin} from '../../store/reducers/CoinReducer/CoinReducerAction'
export const useCoinHook = ()  => {
    let { coin } = useSelector((state ) => state.CoinReducer);
    return {
        coin
    }
}

export const useCoinActionHook = () => {
    let dispatch = useDispatch();

    let {
        _AddCoin,
        _EffectGetCoin
    } = useMemo(() => {
        const _AddCoin = (payload) => {
            dispatch(AddCoin(payload));
        }
        const _EffectGetCoin = (coinName) =>{
            dispatch(EffectGetCoin(coinName));
        }
        return {
            _AddCoin,
            _EffectGetCoin
        }
    }, []);

    return {
        AddCoin:_AddCoin,
        EffectGetCoin : _EffectGetCoin

    }
}