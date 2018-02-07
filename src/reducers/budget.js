import * as types from "../actions/marketTypes";

const initialState = {
    deliveryExpanse: 0,
    profit: 0,
    farmExpanse: 0,
    marketExpanse: 0 
}

const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVE_ORDER_TO_CUSTOMER:
            return Object.assign({}, state, {
                deliveryExpanse: state.deliveryExpanse + 20
            })
        case types.CREATE_ORDER:
            return Object.assign({}, state, {
                profit: state.profit + action.payload.price,
                marketExpanse: state.marketExpanse + 20
            })
        case types.MOVE_ORDER_TO_FARM:
            return Object.assign({}, state, {
                farmExpanse: state.farmExpanse + 100
            })

        default:
            return state;
    }
}

export default budgetReducer