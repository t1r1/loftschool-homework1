import {MOVE_ORDER_TO_FARM} from "../actions/marketTypes";
import {MOVE_ORDER_TO_CUSTOMER} from "../actions/farmTypes";

const initialState = {
   orders: []
}

const farmReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVE_ORDER_TO_FARM:
            return {orders: state.orders.concat(action.payload)};   
        case MOVE_ORDER_TO_CUSTOMER:
            let orders = state.orders.filter( item => item.id !== action.payload.id )
            return {
                ...state, 
                orders
            }
        default:
            return state;
    }
}

export default farmReducer
