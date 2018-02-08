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
            return Object.assign({}, state, {
                orders: [...state.orders.filter((item) => {
                    return item.id !== action.payload.id
                })]})
        default:
            return state;
    }
}

export default farmReducer
