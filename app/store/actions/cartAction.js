const {
    ADD_CART,
    IS_LOADING,
    GET_ORDER_USER,
    GET_FORM_ORDER,
    IS_LOADING_CREATE_ORDER,
} = require("../constants/cartContants");

export const setAddCart = (payload) => {
    return {
        type: ADD_CART,
        payload,
    };
};

export const setAddCartNotUser = (payload) => {
    return {
        type: ADD_CART,
        payload,
    };
};

export const setIsLoading = (payload) => {
    return {
        type: IS_LOADING,
    };
};
export const setIsLoadingCreateOrder = (payload) => {
    return {
        type: IS_LOADING_CREATE_ORDER,
    };
};

export const setOrderByUser = (payload) => {
    return {
        type: GET_ORDER_USER,
        payload,
    };
};
export const setFormOrderByUser = (payload) => {
    return {
        type: GET_FORM_ORDER,
        payload,
    };
};
