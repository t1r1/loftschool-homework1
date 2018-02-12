import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from "../actions/marketTypes";

const initialState = {
   orders: []
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return {orders: state.orders.concat(action.payload)};   
        case MOVE_ORDER_TO_FARM:
                let orders = state.orders.filter( item => item.id !== action.payload.id )
                return {
                    ...state, 
                    orders
                }
        default:
            return state;
    }
}

export default marketReducer