import { Dispatch } from "redux";
import {
    IActionGETFilters,
    IActionSETSelectedFilters,
    IFilterData,
    ISetFilterData
} from "./types";
import { fetchColor, fetchManufacturers } from '../../api/filter-api/fetchFilters';
import { GET_FILTERS, SET_SELECTED_FILTERS } from '../../constants/actions';

export const getFilters = () => async (dispatch: Dispatch) => {
    const [colors, manufacturers] = await Promise.all([ fetchColor(), fetchManufacturers() ]);
    dispatch(filterData({ colors: colors.data.colors, manufacturers: manufacturers.data.manufacturers }))
}

const filterData = ({ colors, manufacturers }: IFilterData):IActionGETFilters => {
    return {
        type: GET_FILTERS,
        payload: {
            colors,
            manufacturers: manufacturers.map(({ name }) => name)
        }
    }
}


export const setSelectedFilters = ({color, manufacturer}: ISetFilterData): IActionSETSelectedFilters => {
    return {
        type: SET_SELECTED_FILTERS,
        payload: {
            colorFilter: color,
            manufacturerFilter:  manufacturer
        }
    }
}
