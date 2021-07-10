import { Reducer } from "redux";
import { IActionFetchCars, InitialStateReducer } from "./types";
import { FETCH_CARS_SUCCESS } from "../../constants/actions";

const initialState: InitialStateReducer = {
    cars: [],
    totalCarsCount: 0,
    totalPageCount: 0
}

type Action = IActionFetchCars;

export const carsReducer: Reducer<InitialStateReducer, Action> = (state: InitialStateReducer = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_CARS_SUCCESS: {
            return {
                ...state,
                cars: action.payload.cars,
                totalCarsCount: action.payload.totalCarsCount,
                totalPageCount: action.payload.totalPageCount
            }
        }
        default:
            return state
    }
}
