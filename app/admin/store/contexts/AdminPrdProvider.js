"use client";
import React, { useEffect, useReducer } from "react";
import AdminProductContext from "./AdminProductContext";
import adminPrdReducer, { adminPrdInitState } from "../reducer/adminPrdReducer";
import axios from "axios";
import { BASE_URL } from "@/app/store/utils/services";
import { headers } from "@/node_modules/next/headers";
import {
    SetFormProduct,
    setAllProducts,
    setIsLoading,
    setIsSuccsess,
} from "../acttions/adminPrdActions";

const AdminPrdProvider = ({ children }) => {
    const [state, dispatch] = useReducer(adminPrdReducer, adminPrdInitState);

    const checkToken = () => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        const userDataJSON = userCookie.split("=")[1];
        const userData = JSON.parse(userDataJSON);
        return userData.token;
    };

    const handleUploadImage = async (data) => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        try {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            const token = userData.token;
            const response = await axios.post(`${BASE_URL}/upload/`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            if (response.data.success) {
                dispatch(SetFormProduct({ image: response.data.urls }));
            }
        } catch (error) {
            console.error("Error uploading image:", error.message);
        }
    };

    const createProduct = async (dataForm) => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        try {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            const token = userData.token;
            dispatch(setIsLoading());
            const response = await axios.post(`${BASE_URL}/product`, dataForm, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(setIsLoading());
            if (response.data.success) {
                dispatch(setIsSuccsess());
            }
            console.log(response);
        } catch (error) {}
    };

    const deleteProduct = async (productId) => {
        try {
            const token = checkToken();
            const response = await axios.delete(
                `${BASE_URL}/product/${productId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            const getAllProducts = await axios.get(`${BASE_URL}/product`);
            dispatch(setAllProducts(getAllProducts.data.product));
            console.log(response);
        } catch (error) {}
    };

    useEffect(() => {
        const getAllProducts = () => {
            const prdDataJSON = sessionStorage.getItem("AllProducts");

            if (prdDataJSON) {
                const productsData = JSON.parse(prdDataJSON);

                // console.log(productsData);
                dispatch(setAllProducts(productsData));
            }
        };

        getAllProducts();
    }, []);

    return (
        <AdminProductContext.Provider
            value={{
                state,
                dispatch,
                handleUploadImage,
                createProduct,
                deleteProduct,
            }}
        >
            {children}
        </AdminProductContext.Provider>
    );
};

export default AdminPrdProvider;
