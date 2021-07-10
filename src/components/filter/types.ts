export interface ISetFilterPayload {
    colorFilter: string,
    manufacturerFilter: string
}

export interface IFiltersPayload {
    colors: string[],
    manufacturers: string[]
}

export interface IFilterReducer {
    colors: string[],
    manufacturers: string[],
    colorFilter: string,
    manufacturerFilter: string
}

export interface IFilterData {
    colors: [],
    manufacturers: []
}

export interface ISetFilterData {
    color: string,
    manufacturer: string
}

export interface IActionGETFilters {
    type: '@@filters//GET_FILTERS',
    payload: IFiltersPayload
}

export interface IActionSETSelectedFilters {
    type: '@@filters//SET_SELECTED_FILTERS',
    payload: ISetFilterPayload
}

export interface ISelector {
    options: [],
    selectValue: string,
    selectId: string,
    selectName: string,
    handleChange: any,
    optionDefaultValue: string,
    selectLabel: string
}
