
export function createOrder(data) {
    return {
        type: "CREATE_ORDER",
        payload: data
    }
}


export function moveOrderToFarm(data) {
    return {
        type: "MOVE_ORDER_TO_FARM",
        payload: data
    }
}


export function moveOrderToCustomer(data) {
    return {
        type: "MOVE_ORDER_TO_CUSTOMER",
        payload: data
    }
}