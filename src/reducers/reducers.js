import { combineReducers } from 'redux';
import budgetReducer from './budget'

const rootReducer = combineReducers({
    budgetState: budgetReducer
    // market,
    // farm
});

export default rootReducer;