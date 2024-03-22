"use client";

import React, { useEffect, useReducer } from "react";
import axios from "axios";
import AdminCategoryProductContext from "./AdminCategoryProductContext";
import adminCatePrdReducer, {
    adminCatePrdInitState,
} from "../reducer/adminCatePrdReducer";
import { BASE_URL } from "@/app/store/utils/services";
import { setAllCategory } from "../acttions/adminCategoryPrdActions";

const AdminCategoryProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        adminCatePrdReducer,
        adminCatePrdInitState,
    );

    useEffect(() => {
        const handlerGetCategory = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/category`);

                dispatch(setAllCategory(response.data.getAllCategory));
            } catch (error) {}
        };
        handlerGetCategory();
    }, []);

    return (
        <AdminCategoryProductContext.Provider value={{ state, dispatch }}>
            {children}
        </AdminCategoryProductContext.Provider>
    );
};

export default AdminCategoryProductProvider;
