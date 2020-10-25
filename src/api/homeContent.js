/**
 * Interface for portal and recommendation
 */


import base from "./base"
import {getData} from "../utils/http"

const homeContent = {
    homeContent1Data(city){
        return getData(base.homeContent1 + "?city=" + city);
    },
    homeContent2Data(city){
        return getData(base.homeContent2 + "?city=" + city);
    }
}

export default homeContent;