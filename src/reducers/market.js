import * as types from "../actions/marketTypes";

const initialState = {
   orders: []
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_ORDER:
            return {orders: state.orders.concat(action.payload)};   
        default:
            return state;
    }
}

export default marketReducer