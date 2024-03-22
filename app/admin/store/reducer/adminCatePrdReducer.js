import { GET_ALL_CATEGORY } from "../constants/adminCategoryPrdConstants";

const adminCatePrdInitState = {
    isLoading: false,
    categoryAll: [],
};

const adminCatePrdReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                isLoading: !state.isLoading,
                categoryAll: action.payload,
            };
    }
};
export { adminCatePrdInitState };
export default adminCatePrdReducer;
