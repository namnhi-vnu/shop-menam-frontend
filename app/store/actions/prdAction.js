import {
    GET_ALL_CATEGORY,
    GET_ALL_PRODUCTS,
    GET_PRODUCTS_CATEGORY,
    GET_PRODUCT_DETAIL,
    IS_LOADING,
} from "../constants/prdConstants";

export const setProductsAll = (payload) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload,
    };
};

export const setProductDetail = (payload) => {
    return {
        type: GET_PRODUCT_DETAIL,
        payload,
    };
};

export const setMenuCategory = (payload) => {
    return {
        type: GET_ALL_CATEGORY,
        payload,
    };
};

export const setProductByCategory = (payload) => {
    return {
        type: GET_PRODUCTS_CATEGORY,
        payload,
    };
};

export const setIsLoading = (payload) => {
    return {
        type: IS_LOADING,
    };
};
