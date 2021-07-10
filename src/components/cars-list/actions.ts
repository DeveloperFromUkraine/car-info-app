import { Dispatch } from "redux";
import { fetchCars } from "../../api/car-api/fetchCars";
import { FETCH_CARS_SUCCESS } from "../../constants/actions";
import { IActionFetchCars, IActionFetchCarsPayload } from "./types";

export const getCars = (page = 1, manufacturer = "", color = "", sort= "asc") => (dispatch: Dispatch) => {
    fetchCars({page, manufacturer, color, sort})
        .then(({ data }: any) => {
           dispatch(carsData(data))
        });
}

const carsData = (cars: IActionFetchCarsPayload): IActionFetchCars => {
    return {
        type: FETCH_CARS_SUCCESS,
        payload: {
            cars: cars.cars,
            totalCarsCount: cars.totalCarsCount,
            totalPageCount: cars.totalPageCount
        }
    }
}
