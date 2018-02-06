import * as types from "../actions/marketTypes";

const initialState = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVE_ORDER_TO_CUSTOMER:
            return Object.assign({}, state, {
                deliveryExpanse: action.payload
            })
        case types.CREATE_ORDER:
            return Object.assign({}, state, {
                profit: action.payload
            })
        case types.MOVE_ORDER_TO_FARM:
            return Object.assign({}, state, {
                farmExpanse: action.payload
            })

        default:
            return state;
    }
}

export default budgetReducer