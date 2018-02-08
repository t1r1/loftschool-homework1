import {MOVE_ORDER_TO_CUSTOMER} from './farmTypes'

export function moveOrderToCustomer(data) {
    console.log('moveOrderToCustomer')
    return {
        type: MOVE_ORDER_TO_CUSTOMER,
        payload: data
    }
}