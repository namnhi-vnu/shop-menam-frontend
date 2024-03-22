import {
    CREATE_PRODUCT,
    GET_ALL_PRODUCT,
    GET_FORM_PRODUCT,
    IS_LOADING,
    IS_SUCCSESS,
} from "../constants/adminPrdConstants";

const adminPrdInitState = {
    isLoading: false,
    isSuccsess: false,
    dataFormNewPrd: {
        title: "",
        description: "",
        category: "",
        price: "",
        oldPrice: "",
        quantity: "",
        image: [],
    },
    allProduct: [],
};

const adminPrdReducer = (state, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                dataFormNewPrd: action.payload,
            };
        case GET_FORM_PRODUCT:
            return {
                ...state,
                dataFormNewPrd: {
                    ...state.dataFormNewPrd,
                    ...action.payload,
                },
            };
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case IS_SUCCSESS:
            return {
                ...state,
                isSuccsess: !state.isSuccsess,
            };
        default:
            return state;
    }
};

export { adminPrdInitState };
export default adminPrdReducer;
