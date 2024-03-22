import {
    GET_ALL_CATEGORY,
    GET_ALL_PRODUCTS,
    GET_PRODUCTS_CATEGORY,
    GET_PRODUCT_DETAIL,
    IS_LOADING,
} from "../constants/prdConstants";

const initStatePrd = {
    // sản phẩm nổi bật
    isLoading: false,
    allProducts: [],
    productbyCategory: [],
    productDetail: {},
    menuCategory: {},
};

const prdReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
            };
        case GET_ALL_CATEGORY:
            return {
                ...state,
                menuCategory: action.payload,
            };
        case GET_PRODUCTS_CATEGORY:
            return {
                ...state,
                productbyCategory: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        default:
            return state;
    }
};

export { initStatePrd };
export default prdReducer;
