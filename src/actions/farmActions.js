import * as types from "./farmTypes";


export function moveOrderToCustomer(data) {
    return {
        type: "MOVE_ORDER_TO_CUSTOMER",
        payload: data
    }
}