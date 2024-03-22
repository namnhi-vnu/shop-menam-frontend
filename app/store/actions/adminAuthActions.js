import {
    CHECK_IS_ADMIN,
    IS_LOADING_CHECK,
} from "../constants/adminAuthConstants";

export const setIsCheckAdmin = (payload) => {
    return {
        type: CHECK_IS_ADMIN,
        payload,
    };
};

export const setIsLoadingCheckAdmin = (payload) => {
    return {
        type: IS_LOADING_CHECK,
        payload,
    };
};
