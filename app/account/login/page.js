"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { PiEyeClosedThin, PiEyeThin } from "react-icons/pi";

import Layout from "@/app/layouts/Layout";
import AuthContext from "@/app/store/contexts/authContext";
import {
    setDaTaFrom,
    setFormShowPassword,
} from "@/app/store/actions/authAction";
import Loading from "@/app/components/Loading";
import AuthLogin from "@/app/store/middleware/LoginAuth";

const page = () => {
    const { state, dispatch, loginUser } = useContext(AuthContext);
    const { getForm } = state;
    const {
        isLoading,
        showPassword,
        getForm: { phone, password },
        isMessage,
    } = state;

    AuthLogin();

    const handlerGetInput = (e) => {
        dispatch(setDaTaFrom({ [e.target.name]: e.target.value }));
    };
    const handlerOnLogin = (e) => {
        e.preventDefault();
        loginUser(getForm);
        dispatch(setDaTaFrom({ phone: "", password: "" }));
    };
    return (
        <Layout type="account">
            <div className="max-md:p-2 pt-16 ">
                <div className="w-[450px] max-md:w-full  mx-auto shadow-lg p-8 rounded-lg border">
                    <div>
                        <div>
                            <h2 className="text-center text-orange-600 text-3xl pb-4 font-semibold">
                                Đăng nhập
                            </h2>
                        </div>
                        <form action="">
                            <p className="text-center text-sm text-red-500">
                                {isMessage.isMessage}
                            </p>
                            <div className="py-4">
                                <input
                                    value={phone}
                                    onChange={handlerGetInput}
                                    name="phone"
                                    type="text"
                                    placeholder="Số điện thoại hoặc tên đăng nhập"
                                    className="outline-none border border-gray-200 w-full p-2 text-sm rounded-sm"
                                />
                            </div>
                            <div className="py-4 relative">
                                <input
                                    value={password}
                                    onChange={handlerGetInput}
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Mật khẩu"
                                    className="outline-none border border-gray-200 w-full p-2 text-sm rounded-sm"
                                />
                                <div
                                    className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
                                    onClick={() =>
                                        dispatch(setFormShowPassword())
                                    }
                                >
                                    {showPassword ? (
                                        <PiEyeThin />
                                    ) : (
                                        <PiEyeClosedThin />
                                    )}
                                </div>
                            </div>
                            <div className="py-4">
                                <button
                                    onClick={(e) => handlerOnLogin(e)}
                                    className="w-full bg-orange-600 p-2 rounded-md text-white select-none hover:opacity-80"
                                    disabled={isLoading ? "disabled" : ""}
                                >
                                    {isLoading ? <Loading /> : "Đăng nhập"}
                                </button>
                            </div>
                        </form>
                        <div>
                            <p className="text-sm text-gray-600">
                                Bạn chưa có tài khoản?
                                <Link
                                    href="/account/signup"
                                    className="text-base text-color-hover inline-block pl-1 hover:underline "
                                >
                                    Đăng ký
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
