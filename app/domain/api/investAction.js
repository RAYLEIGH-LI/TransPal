/**
 * Created by haifeng on 17/2/9.
 */
import {http_get, http_post, http_put, url_mapper} from "domain/api/http"

export let investFetch = () => {
    let URL = 'http://tz88.com.cn/cmfx/invest/all';


    let response='{"status":"success","data":[{"id":"1","name":"\u65b0\u624b\u56e2","status":"1","yield":"12","price":"1\u5143\u8d77\u6295","quit":"\u5230\u671f\u540e\u9000\u56e2","time":"\u6301\u6709\u6ee115\u5929\u81ea\u52a8\u9000\u56e2","tag":"1"},{"id":"6","name":"\u7ecf\u5178\u56e2","status":"1","yield":"7","price":"5000\u5143\u8d77\u6295","quit":"\u53ef\u968f\u65f6\u9000\u56e2","time":"\u6301\u6709\u6ee190\u5929\u540e\u514d\u9000\u56e2\u624b\u7eed\u8d39","tag":"0"},{"id":"5","name":"\u5b63\u5b63\u7ffb","status":"2","yield":"8","price":"10,0000\u5143\u8d77\u6295","quit":"\u53ef\u968f\u65f6\u9000\u56e2","time":"\u6301\u6709360\u5929\u540e\u514d\u9000\u56e2\u624b\u7eed\u8d39","tag":"0"},{"id":"8","name":"\u5c0f\u878d\u5305","status":"0","yield":"5","price":"1\u5143\u8d77\u6295","quit":"\u9000\u56e2\u7075\u6d3b","time":"\u9000\u56e2\u65e0\u624b\u7eed\u8d39","tag":"0"}]}'

    return dispatch => {

        dispatch(fetchInvestList(response));

    }
}

let fetchInvestList = (response) => {
    return {
        type: "FETCH_INVEST_LIST",
        response
    }
}

let fetchInvestError = () => {
    return {
        type: types.FETCH_INVEST_INIT,
    }
}

