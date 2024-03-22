import { GET_ALL_CATEGORY } from "../constants/adminCategoryPrdConstants";

export const setAllCategory = (payload) => {
    return {
        type: GET_ALL_CATEGORY,
        payload,
    };
};
