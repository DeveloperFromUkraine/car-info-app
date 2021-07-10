import axios from "axios";
import { baseUrl } from "../baseUrl";

interface IFetchCars {
    page: number,
    manufacturer: string,
    color: string,
    sort: string
}

export const fetchCars = ({page, manufacturer, color, sort}: IFetchCars): Promise<IFetchCars>  => {
    const params = {
      page,
      ...(manufacturer && { manufacturer }),
      ...(color && { color }),
      sort
    };

    return axios.get(`${baseUrl.fetchUrl}api/cars`, { params });
}
