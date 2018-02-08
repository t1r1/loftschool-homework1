import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from "../actions/marketTypes";

const initialState = {
   orders: []
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {orders: state.orders.concat(action.payload)};   
        case MOVE_ORDER_TO_FARM:
            return Object.assign({}, state, {
                orders: [...state.orders.filter((item) => {
                    return item.id !== action.payload.id
                })]})  
        default:
            return state;
    }
}

export default marketReducer