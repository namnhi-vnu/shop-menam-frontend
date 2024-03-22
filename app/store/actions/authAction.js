import {
    GET_DATA_FORM,
    GET_DATA_SIGNUP,
    LOGIN_ACCOUNT,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SHOW_PASSWORD_ACCOUNT,
    SIGNUP_ACCOUNT,
    UPDATE_ACCOUNT,
    UPDATE_SUCCESS,
    GET_ADDRESS,
    USER,
    GET_DATA_FORM_ADDRESS,
    FILL_DATA_FORM_ADDRESS,
} from "../constants/authConstants";

export const setDaTaFrom = (payload) => {
    return {
        type: GET_DATA_FORM,
        payload,
    };
};
export const setDataFromSignup = (payload) => {
    return {
        type: GET_DATA_SIGNUP,
        payload,
    };
};
export const setFormLogin = (payload) => {
    return {
        type: LOGIN_ACCOUNT,
    };
};
export const setLoginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
    };
};
export const setLoginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
};
export const setUser = (payload) => {
    return {
        type: USER,
        payload,
    };
};
export const setSignUpAccount = (payload) => {
    return {
        type: SIGNUP_ACCOUNT,
        payload,
    };
};
export const setFormShowPassword = (payload) => {
    return {
        type: SHOW_PASSWORD_ACCOUNT,
    };
};

export const setUpdateAccount = (payload) => {
    return {
        type: UPDATE_ACCOUNT,
        payload,
    };
};

export const setUpdateAccountSuccess = (payload) => {
    return {
        type: UPDATE_SUCCESS,
        payload,
    };
};
export const setAddress = (payload) => {
    return {
        type: GET_ADDRESS,
        payload,
    };
};

export const setNewFormAddress = (payload) => {
    return {
        type: GET_DATA_FORM_ADDRESS,
        payload,
    };
};

export const setFillDataFormAddress = (payload) => {
    return {
        type: FILL_DATA_FORM_ADDRESS,
        payload,
    };
};
