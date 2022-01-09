import {ADD_COIN,CLEAR_COIN_STORE} from '../actionTypes'
const initState  = {
    coin : {}
}
export default (state  = initState, action ) => {
    switch (action.type) {
        
        case ADD_COIN: { 
                    return { ...state, coin:  action.payload}; 
                }
        case CLEAR_COIN_STORE:
            return {
                coin : {}
            };
        
        default:
            return state;
    }
}