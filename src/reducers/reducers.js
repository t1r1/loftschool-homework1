import { combineReducers } from 'redux';
import budgetReducer from './budget'

const rootReducer = combineReducers({
    budgetReducer,
    // market,
    // farm
});

export default rootReducer;