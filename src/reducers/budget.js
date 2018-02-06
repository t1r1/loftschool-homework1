import * as types from "../actions/actionTypes";

const initialState = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVE_ORDER_TO_CUSTOMER:
            return Object.assign({}, state, {
                deliveryExpanse: state.deliveryExpanse + 20
            })
        case types.CREATE_ORDER:
            return Object.assign({}, state, {
                profit: action.payload.price
            })
        default:
            return state;
    }
}

export default budgetReducer