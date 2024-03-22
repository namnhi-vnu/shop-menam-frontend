import {
    ADD_CART,
    ADD_CART_NOT_USER,
    GET_ALL_CART,
    GET_FORM_ORDER,
    GET_ORDER_USER,
    IS_LOADING,
    IS_LOADING_CREATE_ORDER,
    SET_CART,
} from "../constants/cartContants";

const initStateCart = {
    isLoading: false,
    isLoadingCreateOrder: false,
    cart: [],
    cartNotUser: [],
    orderUser: [],
    checkoutInformation: {
        COD: true,
        couponApplied: false,
        paymentMethod: "",
        cartTotal: 0,
        orderDetails: {
            fullname: "",
            phone: "",
            street: "",
            desception: "",
            city: "",
            district: "",
            ward: "",
        },
        products: [],
    },
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case ADD_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case ADD_CART_NOT_USER:
            return {
                ...state,
                cart: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case IS_LOADING_CREATE_ORDER:
            return {
                ...state,
                isLoadingCreateOrder: !state.isLoadingCreateOrder,
            };
        case GET_ORDER_USER:
            return {
                ...state,
                orderUser: action.payload,
            };
        case GET_FORM_ORDER:
            return {
                ...state,
                checkoutInformation: {
                    ...state.checkoutInformation,
                    paymentMethod:
                        action.payload.paymentMethod !== undefined
                            ? action.payload.paymentMethod
                            : state.checkoutInformation.paymentMethod,
                    orderDetails: {
                        ...state.checkoutInformation.orderDetails,
                        ...(action.payload.orderDetails
                            ? action.payload.orderDetails
                            : {}),
                    },
                    cartTotal:
                        action.payload.cartTotal !== undefined
                            ? action.payload.cartTotal
                            : state.checkoutInformation.cartTotal,
                    products:
                        action.payload.products !== undefined
                            ? action.payload.products
                            : state.checkoutInformation.products,
                },
            };
        default:
            return state;
    }
};

export { initStateCart };
export default cartReducer;
