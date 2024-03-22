"use client";
import { useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import authReducer, { initState } from "../reducer/authReducer";
import AuthContext from "./authContext";
import { BASE_URL } from "../utils/services";
import {
    setAddress,
    setFillDataFormAddress,
    setLoginFailure,
    setLoginSuccess,
    setUpdateAccount,
    setUpdateAccountSuccess,
    setUser,
} from "../actions/authAction";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [state, dispatch] = useReducer(authReducer, initState);
    const { user } = state;
    const [callAddress, setCallAddress] = useState(false);

    const checkToken = () => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        if (userCookie) {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            return userData.token;
        }
    };

    const loginUser = async (dataForm) => {
        try {
            dispatch(setLoginSuccess());
            const response = await axios.post(
                `${BASE_URL}/user/login`,
                dataForm,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            if (!response.data.success) {
                dispatch(setLoginFailure({ isMessage: response.data.message }));
            }
            const token = response.data.token;
            const expires = new Date(jwtDecode(token).exp * 1000);

            document.cookie = `MeNamUserToken=${JSON.stringify(token)};expires=${expires.toUTCString()}; path=/`;
            document.cookie = `MeNamUser=${JSON.stringify(response.data)};expires=${expires.toUTCString()}; path=/`;

            dispatch(setLoginSuccess());
            dispatch(setUser({ user: response.data }));

            router.push("/");
        } catch (error) {
            dispatch(
                setLoginFailure({
                    isMessage: "Thông tin đăng nhập không đúng",
                }),
            );
        }
    };

    const signUpUser = async (dataForm) => {
        try {
            dispatch(setLoginSuccess());
            const response = await axios.post(
                `${BASE_URL}/user/register`,
                dataForm,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            if (!response.data.success) {
                dispatch(setLoginFailure({ isMessage: response.data.message }));
            }
            const token = response.data.token;
            const expires = new Date(jwtDecode(token).exp * 1000);
            console.log(response);
            document.cookie = `MeNamUserToken=${JSON.stringify(token)};expires=${expires.toUTCString()}; path=/`;
            document.cookie = `MeNamUser=${JSON.stringify(response.data)};expires=${expires.toUTCString()}; path=/`;

            dispatch(setLoginSuccess());
            dispatch(setUser({ user: response.data }));

            router.push("/account/login");
        } catch (error) {
            dispatch(
                setLoginFailure({
                    isMessage: "Thông tin đăng nhập không đúng",
                }),
            );
        }
    };

    const handlerLogout = (cookies) => {
        cookies.forEach((name) => {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
        window.location.href = "/";
    };

    const updateUser = async (dataFormUser) => {
        console.log(dataFormUser);
        try {
            dispatch(setUpdateAccountSuccess());
            const response = await axios.put(
                `${BASE_URL}/user/edit-user/${user?.user?._id}`,
                dataFormUser,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.user?.token}`,
                    },
                },
            );
            const token = response.data.token;
            const expires = new Date(jwtDecode(token).exp * 1000);
            document.cookie = `MeNamUserToken=${JSON.stringify(token)};expires=${expires.toUTCString()}; path=/`;
            document.cookie = `MeNamUser=${JSON.stringify(response.data)};expires=${expires.toUTCString()}; path=/`;
            dispatch(setUpdateAccountSuccess());
            dispatch(setUser({ user: response.data }));
        } catch (error) {
            console.log(error);
        }
    };
    const uploadAvatar = async (data) => {
        try {
            const token = checkToken();
            if (token) {
                const response = await axios.post(`${BASE_URL}/upload/`, data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    dispatch(
                        setUpdateAccount({ avatar: response.data.urls[0].url }),
                    );
                }
            }
        } catch (error) {}
    };
    useEffect(() => {
        // check cookies
        const checkCookieExpiration = async () => {
            // Tìm cookie có tên là MeNamUser và trích xuất user_id
            const userCookie = document.cookie
                .split("; ")
                .find((cookie) => cookie.startsWith("MeNamUser="));

            if (userCookie) {
                const userDataJSON = userCookie.split("=")[1];
                const userData = JSON.parse(userDataJSON);
                const user_id = userData._id;
                // Gửi yêu cầu để lấy thông tin người dùng từ máy chủ
                try {
                    const response = await axios.get(
                        `${BASE_URL}/user/get-user/${user_id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${userData.token}`,
                            },
                        },
                    );

                    dispatch(setUser({ user: response.data }));
                } catch (error) {}
            } else {
            }
        };

        // Gọi hàm kiểm tra cookie khi trang được tải
        checkCookieExpiration();
    }, []);

    useEffect(() => {
        const getAddress = async () => {
            try {
                const token = checkToken();
                if (token) {
                    const response = await axios.get(
                        `${BASE_URL}/user/address`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    if (response.data.success) {
                        dispatch(setAddress(response.data.addresses));
                    }
                }
            } catch (error) {}
        };
        getAddress();
    }, []);
    useEffect(() => {
        const getAddress = async () => {
            try {
                const token = checkToken();
                if (token) {
                    const response = await axios.get(
                        `${BASE_URL}/user/address`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    if (response.data.success) {
                        dispatch(setAddress(response.data.addresses));
                    }
                }
            } catch (error) {}
        };
        getAddress();
    }, [callAddress]);

    // add address
    const newAddressUser = async (DataAddress) => {
        try {
            const token = checkToken();
            if (token) {
                const response = await axios.post(
                    `${BASE_URL}/user/address`,
                    DataAddress,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    setCallAddress(!callAddress);
                }
            }
        } catch (error) {}
    };

    // delete address
    const deleteAddressUser = async (id) => {
        try {
            const token = checkToken();
            if (token) {
                const response = await axios.delete(
                    `${BASE_URL}/user/address/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    setCallAddress(!callAddress);
                }
            }
        } catch (error) {}
    };

    // set isDefault

    const setDefaultAddress = async (id) => {
        try {
            const token = checkToken();
            const data = {
                isDefault: true,
            };
            if (token) {
                const response = await axios.put(
                    `${BASE_URL}/user/update-address/${id}`,
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    setCallAddress(!callAddress);
                }
            }
        } catch (error) {}
    };

    const fillDataFormAddress = async (id) => {
        try {
            const token = checkToken();
            if (token) {
                const response = await axios.get(
                    `${BASE_URL}/user/address/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    dispatch(setFillDataFormAddress(response.data.addresses));
                }
            }
        } catch (error) {}
    };

    const updateAddress = async (id, data) => {
        try {
            const token = checkToken();

            if (token) {
                const response = await axios.put(
                    `${BASE_URL}/user/update-address/${id}`,
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.success) {
                    setCallAddress(!callAddress);
                    dispatch(setFillDataFormAddress({}));
                }
            }
        } catch (error) {}
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
                loginUser,
                signUpUser,
                updateUser,
                uploadAvatar,
                newAddressUser,
                deleteAddressUser,
                setDefaultAddress,
                fillDataFormAddress,
                updateAddress,
                handlerLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
