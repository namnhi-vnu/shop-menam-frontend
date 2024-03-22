import {
    GET_ALL_ORDER,
    GET_ORDER_DETAIL,
    UPDATE_STATUS_ORDER,
} from "../constants/adminOrderConstants";

export const setGetAllOrder = (payload) => {
    return {
        type: GET_ALL_ORDER,
        payload,
    };
};
export const setGetOrderDetail = (payload) => {
    return {
        type: GET_ORDER_DETAIL,
        payload,
    };
};
export const setUpdateOrderDetail = (payload) => {
    console.log(payload);
    return {
        type: UPDATE_STATUS_ORDER,
        payload,
    };
};
