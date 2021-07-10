interface IMileage {
    number: number,
    unit: string
}

export interface IActionFetchCarsPayload {
    cars: ICar[],
    totalCarsCount: number,
    totalPageCount: number
}

export interface ICar {
    stockNumber: number,
    manufacturerName: string,
    modelName: string,
    color: string,
    mileage: IMileage,
    fuelType: string,
    pictureUrl: string
}

export interface InitialStateReducer {
    cars: ICar[],
    totalCarsCount: number,
    totalPageCount: number
}

export interface IActionFetchCars {
    type: '@@cars//FETCH_CARS_SUCCESS',
    payload: IActionFetchCarsPayload
}
