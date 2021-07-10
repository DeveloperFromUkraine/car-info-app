import axios from "axios";
import { baseUrl } from "../baseUrl";

export const fetchColor = () => {
    return axios.get(`${baseUrl.fetchUrl}api/colors`, );
}

export const fetchManufacturers = () => {
    return axios.get(`${baseUrl.fetchUrl}api/manufacturers`, );
}
