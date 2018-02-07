import * as types from "../actions/farmTypes";

const initialState = {
   orders: []
}

const farmReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.MOVE_ORDER_TO_FARM:
        //     return {orders: state.orders.concat(action.payload)};   
        case types.MOVE_ORDER_TO_CUSTOMER:
            // return {orders: state.orders.filter((item) => {
            //     return item.id !== action.payload.id
            // })};   

            return Object.assign({}, state, {
                orders: [...state.orders.filter((item) => {
                    return item.id !== action.payload.id
                })]})
        default:
            return state;
    }
}

export default farmReducer
