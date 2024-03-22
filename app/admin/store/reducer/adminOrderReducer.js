import {
    GET_ALL_ORDER,
    GET_ORDER_DETAIL,
    UPDATE_STATUS_ORDER,
} from "../constants/adminOrderConstants";

const adminOrderInitState = {
    isOrderLoading: false,
    allOrder: [],
    orderDetail: [],
    getOrderStatus: {
        orderStatus: "",
    },
};

const adminOrderReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                allOrder: action.payload,
            };
        case GET_ORDER_DETAIL:
            return {
                ...state,
                orderDetail: action.payload,
            };
        case UPDATE_STATUS_ORDER:
            return {
                ...state,
                getOrderStatus: {
                    ...state.getOrderStatus,
                    orderStatus: action.payload,
                },
            };
        default:
            return state;
    }
};

export { adminOrderInitState };
export default adminOrderReducer;
