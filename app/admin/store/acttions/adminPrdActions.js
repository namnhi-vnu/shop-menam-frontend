import {
    CREATE_PRODUCT,
    GET_ALL_PRODUCT,
    GET_FORM_PRODUCT,
    IS_LOADING,
    IS_SUCCSESS,
} from "../constants/adminPrdConstants";

export const setAllProducts = (payload) => {
    return {
        type: GET_ALL_PRODUCT,
        payload,
    };
};

export const setCreateProduct = (payload) => {
    return {
        type: CREATE_PRODUCT,
        payload,
    };
};

export const SetFormProduct = (payload) => {
    return {
        type: GET_FORM_PRODUCT,
        payload,
    };
};

export const setIsLoading = (payload) => {
    return {
        type: IS_LOADING,
    };
};
export const setIsSuccsess = (payload) => {
    return {
        type: IS_SUCCSESS,
    };
};
