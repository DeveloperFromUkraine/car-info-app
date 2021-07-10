import { combineReducers } from 'redux';
import { carsReducer } from '../components/cars-list/reducer';
import { filtersReducer } from '../components/filter/reducer';

export function createRootReducer() {
    return combineReducers({
        carsReducer,
        filtersReducer
    });
}
