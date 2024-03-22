import {
    FILL_DATA_FORM_ADDRESS,
    GET_ADDRESS,
    GET_DATA_FORM,
    GET_DATA_FORM_ADDRESS,
    GET_DATA_SIGNUP,
    LOGIN_ACCOUNT,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SHOW_PASSWORD_ACCOUNT,
    SIGNUP_ACCOUNT,
    UPDATE_ACCOUNT,
    UPDATE_SUCCESS,
    USER,
} from "../constants/authConstants";

const initState = {
    getForm: {
        phone: "",
        password: "",
    },
    isLoading: false,
    isMessage: "",
    showPassword: false,
    user: null,
    formEditAccount: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
        birthday: "",
        avatar: "",
        address: "",
    },
    getFormSignup: {
        firstname: "",
        phone: "",
        password: "",
    },
    listAddressUser: [],
    getFormNewAddress: {
        fullname: "",
        phone: "",
        street: "",
        city: "",
        district: "",
        ward: "",
    },
};

const authReducer = (state, action) => {
    switch (action.type) {
        case GET_DATA_FORM:
            return {
                ...state,
                getForm: {
                    ...state.getForm,
                    ...action.payload,
                },
            };
        case GET_DATA_FORM_ADDRESS:
            return {
                ...state,
                getFormNewAddress: {
                    ...state.getFormNewAddress,
                    ...action.payload,
                },
            };
        case FILL_DATA_FORM_ADDRESS:
            return {
                ...state,
                getFormNewAddress: action.payload,
            };
        case GET_DATA_SIGNUP:
            return {
                ...state,
                getFormSignup: {
                    ...state.getFormSignup,
                    ...action.payload,
                },
            };
        case LOGIN_ACCOUNT:
            return {
                ...state,
                getForm: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoading,
                isMessage: "",
            };
        case USER:
            return {
                ...state,
                user: action.payload,
                formEditAccount: {
                    ...state.formEditAccount,
                    firstname: action.payload.user.firstname,
                    phone: action.payload.user.phone,
                    birthday: action.payload.user.birthday,
                    gender: action.payload.user.gender,
                    avatar: action.payload.user.avatar,
                },
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: !state.isLoading,
                isMessage: action.payload,
            };
        case SHOW_PASSWORD_ACCOUNT:
            return {
                ...state,
                showPassword: !state.showPassword,
            };
        case UPDATE_ACCOUNT:
            return {
                ...state,
                formEditAccount: {
                    ...state.formEditAccount,
                    ...action.payload,
                },
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case GET_ADDRESS:
            return {
                ...state,
                listAddressUser: action.payload,
            };
        case SIGNUP_ACCOUNT:
            return {
                ...state,
                getFormSignup: action.payload,
            };
        default:
            return state;
    }
};
export { initState };
export default authReducer;
