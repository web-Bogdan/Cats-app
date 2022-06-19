import {ICatsState} from "../../store/cats/reducer";
import axios from "axios";

let currentPage = 102;

export const CatsApi = {
    fetchCats(): Promise<ICatsState>{
            currentPage += 1;
            return axios.get(`https://api.thecatapi.com/v1/images/search?limit=30&page=${currentPage}&order=DESC`, {
                headers: {
                    "x-api-key": "28cce1e4-7c65-4d3b-b49c-c5adae98dea9"
                }
            }).then(({data}) => data);
    }
};
