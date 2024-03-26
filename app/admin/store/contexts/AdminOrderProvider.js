import React, { useEffect, useReducer } from "react";
import AdminOrderContext from "./AdminOrderContext";
import adminOrderReducer, {
    adminOrderInitState,
} from "../reducer/adminOrderReducer";
import axios from "axios";
import { BASE_URL } from "@/app/store/utils/services";
import {
    setGetAllOrder,
    setGetOrderDetail,
    setUpdateOrderDetail,
} from "../acttions/adminOrderActions";

const AdminOrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        adminOrderReducer,
        adminOrderInitState,
    );

    const checkToken = () => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        if (userCookie) {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            return userData;
        }
    };

    const getAllOrderUser = async () => {
        try {
            const getToken = checkToken();
            if (getToken) {
                const token = getToken.token;

                const response = await axios.get(
                    `${BASE_URL}/user/get-orders-all-user`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    dispatch(setGetAllOrder(response.data.alluserorders));
                }
            }
        } catch (error) {}
    };

    const getOrderDetails = async (id) => {
        try {
            const getToken = checkToken();
            if (getToken) {
                const token = getToken.token;

                const response = await axios.get(
                    `${BASE_URL}/user/get-orders/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    dispatch(setGetOrderDetail(response.data.ordersDetail));
                    dispatch(
                        setUpdateOrderDetail({
                            orderStatus: response.data.ordersDetail.orderStatus,
                        }),
                    );
                }
            }
        } catch (error) {}
    };

    const updateOrderStatus = async (id, data) => {
        try {
            const getToken = checkToken();
            if (getToken) {
                const token = getToken.token;

                const response = await axios.put(
                    `${BASE_URL}/user/order/update-order/${id}`,
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.status === 200) {
                    // dispatch(setGetOrderDetail(response.data));
                    getOrderDetails(id);
                }
            }
        } catch (error) {}
    };

    return (
        <AdminOrderContext.Provider
            value={{
                state,
                dispatch,
                getAllOrderUser,
                getOrderDetails,
                updateOrderStatus,
            }}
        >
            {children}
        </AdminOrderContext.Provider>
    );
};

export default AdminOrderProvider;
