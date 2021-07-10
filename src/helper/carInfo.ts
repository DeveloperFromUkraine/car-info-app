import { ICar } from "../components/cars-list/types";

export const carInformation = (car: ICar) => {
    return `
    Stock #
    ${car.stockNumber} -
    ${car.mileage.number} ${car.mileage?.unit} -
    ${car.fuelType} -
    ${car.color.charAt(0).toUpperCase() + car.color.slice(1)}
    `
}
