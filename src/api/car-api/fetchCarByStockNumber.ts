import axios from "axios";
import { baseUrl } from "../baseUrl";

interface IFetchByStockNumber {
    stockNumber: string
}

export const fetchCarByStockNumber = ({ stockNumber }: IFetchByStockNumber): Promise<any> => {
    return axios.get(`${baseUrl.fetchUrl}api/cars/${stockNumber}`);
}
