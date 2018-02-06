import { combineReducers } from 'redux';
import budgetReducer from './budget'
import marketReducer from './market'
import farmReducer from './farm'

const rootReducer = combineReducers({
    budgetState: budgetReducer,
    marketState: marketReducer,
    farmState: farmReducer
});

export default rootReducer;