import {
    CHECK_IS_ADMIN,
    IS_LOADING_CHECK,
} from "../constants/adminAuthConstants";

const adminAuthInitState = {
    isLoadingCheck: true,
    userAdmin: {},
};

const adminAuthReducer = (state, action) => {
    switch (action.type) {
        case CHECK_IS_ADMIN:
            return {
                ...state,
                userAdmin: action.payload,
            };
        case IS_LOADING_CHECK:
            return {
                ...state,
                isLoadingCheck: action.payload,
            };
        default:
            return state;
    }
};

export { adminAuthInitState };
export default adminAuthReducer;
