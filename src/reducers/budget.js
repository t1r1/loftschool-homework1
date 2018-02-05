import * as types from "../actions/farmTypes";



const initialState = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVE_ORDER_TO_CUSTOMER:
            return Object.assign({}, state, {
                deliveryExpanse: action.data
            })

        default:
            return state;
    }
}

export default budgetReducer