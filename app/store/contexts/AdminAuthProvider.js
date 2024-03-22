"use client";
import React, { useReducer } from "react";

import adminAuthReducer, {
    adminAuthInitState,
} from "../reducer/adminAuthReducer";
import AdminAuthContext from "./AdminAuthContext";

const AdminAuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminAuthReducer, adminAuthInitState);
    return (
        <AdminAuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export default AdminAuthProvider;
