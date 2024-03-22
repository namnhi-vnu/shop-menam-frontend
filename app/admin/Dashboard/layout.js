"use client";
import React, { useContext, useEffect } from "react";
import AdminHeader from "../components/AdminHeader/AdminHeader";
import "./style/style.css";
import AdminPrdProvider from "../store/contexts/AdminPrdProvider";
import AdminCategoryProductProvider from "../store/contexts/AdminCategoryProductProvider";
import AuthAdmin from "@/app/store/middleware/AuthAdmin";
import AdminAuthContext from "@/app/store/contexts/AdminAuthContext";
import Loading from "@/app/components/Loading";
import AdminOrderProvider from "../store/contexts/AdminOrderProvider";

const layout = ({ children }) => {
    AuthAdmin();
    const { state } = useContext(AdminAuthContext);
    const { isLoadingCheck } = state;

    if (isLoadingCheck) {
        return (
            <div className="py-16">
                <Loading />;
            </div>
        );
    } else {
        return (
            <AdminPrdProvider>
                <AdminOrderProvider>
                    <AdminCategoryProductProvider>
                        <div className="admin-page relative bg-[#24303F] h-screen overflow-hidden text-white">
                            <div className="grid grid-cols-6">
                                <header className=" col-start-1 col-end-2 relative">
                                    <div className="absolute left-0 top-0 w-full">
                                        <AdminHeader />
                                    </div>
                                </header>
                                <main className="col-start-2 col-end-7  bg-[#1A222C] h-screen overflow-y-auto  ">
                                    <div className="flex flex-1 flex-col ">
                                        {children}
                                    </div>
                                </main>
                            </div>
                        </div>
                    </AdminCategoryProductProvider>
                </AdminOrderProvider>
            </AdminPrdProvider>
        );
    }
};

export default layout;
