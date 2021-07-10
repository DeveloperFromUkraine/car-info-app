import { Reducer } from "redux";
import { IActionGETFilters, IActionSETSelectedFilters, IFilterReducer } from "./types";
import { GET_FILTERS, SET_SELECTED_FILTERS } from "../../constants/actions";

const initialState: IFilterReducer = {
    colors: [],
    manufacturers: [],
    colorFilter: '',
    manufacturerFilter: ''
}

type Action = IActionGETFilters | IActionSETSelectedFilters;

export const filtersReducer: Reducer<IFilterReducer, Action> = (state: IFilterReducer = initialState, action: Action) => {
    switch (action.type) {
        case GET_FILTERS: {
            return {
                ...state,
                colors: action.payload.colors,
                manufacturers: action.payload.manufacturers,
            }
        }
        case SET_SELECTED_FILTERS: {
            return {
                ...state,
                colorFilter: action.payload.colorFilter,
                manufacturerFilter: action.payload.manufacturerFilter,
            }
        }
        default:
            return state
    }
}
