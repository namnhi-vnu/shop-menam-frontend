"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import Layout from "@/app/layouts/Layout";
import AuthContext from "@/app/store/contexts/authContext";
import { setDataFromSignup } from "@/app/store/actions/authAction";

const Page = () => {
    const { state, dispatch, signUpUser } = useContext(AuthContext);
    const { getFormSignup } = state;
    const [errors, setErrors] = useState({
        firstname: "",
        phone: "",
        password: "",
    });

    const {
        getFormSignup: { firstname, phone, password },
    } = state;

    const handlerValidateForm = (e) => {
        dispatch(setDataFromSignup({ [e.target.name]: e.target.value }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `Vui lòng nhập ${name === "firstname" ? "Họ tên" : name === "phone" ? "Số điện thoại" : "Mật khẩu"}.`,
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const handleChangePassword = (e) => {
        const { value } = e.target;
        const hasMinLength = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
            value,
        );

        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "",
            minLengthError: !hasMinLength
                ? "Mật khẩu phải có ít nhất 8 ký tự."
                : "",
            uppercaseError: !hasUpperCase
                ? "Mật khẩu phải có ít nhất một chữ hoa."
                : "",
            lowercaseError: !hasLowerCase
                ? "Mật khẩu phải có ít nhất một chữ thường."
                : "",
            specialCharacterError: !hasSpecialCharacter
                ? "Mật khẩu phải có ít nhất một ký tự đặc biệt (#,!, *, &, %)."
                : "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname !== "" && phone !== "" && password !== "") {
            // Logic xử lý khi form được submit
            signUpUser(getFormSignup);
        } else {
            // Logic xử lý khi form chưa được điền đầy đủ
        }
    };

    return (
        <Layout type="account">
            <div className="max-md:p-2 pt-16 max-md:pt-16">
                <div className="w-[450px] max-md:w-full mx-auto shadow-lg p-8 rounded-lg border">
                    <div>
                        <div>
                            <p className="text-center pb-8 text-gray-500">
                                Chào mừng bạn đến với Shop Mẹ Nấm!
                            </p>
                            <h2 className="text-center text-orange-600 text-3xl pb-4 font-semibold">
                                Đăng ký
                            </h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="py-4">
                                <input
                                    value={firstname}
                                    name="firstname"
                                    onChange={handlerValidateForm}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Họ tên"
                                    className={`outline-none border border-gray-200 w-full p-2 text-sm rounded-sm ${
                                        errors.firstname && "border-red-600"
                                    }`}
                                />
                                {errors.firstname && (
                                    <span className="text-xs text-red-600">
                                        {errors.firstname}
                                    </span>
                                )}
                            </div>
                            <div className="py-4">
                                <input
                                    value={phone}
                                    onChange={handlerValidateForm}
                                    onBlur={handleBlur}
                                    type="text"
                                    name="phone"
                                    placeholder="Số điện thoại"
                                    className={`outline-none border border-gray-200 w-full p-2 text-sm rounded-sm ${
                                        errors.phone && "border-red-600"
                                    }`}
                                />
                                {errors.phone && (
                                    <span className="text-xs text-red-600">
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className="py-4">
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        handlerValidateForm(e);
                                        handleChangePassword(e);
                                    }}
                                    onBlur={handleBlur}
                                    name="password"
                                    type="password"
                                    placeholder="Mật khẩu"
                                    className={`outline-none border border-gray-200 w-full p-2 text-sm rounded-sm ${
                                        errors.password ? "border-red-600" : ""
                                    }`}
                                />
                                {errors.minLengthError ? (
                                    <p className="text-xs pt-1 text-red-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>{errors.minLengthError}</span>
                                    </p>
                                ) : (
                                    <p className="text-xs pt-1 text-green-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>
                                            Mật khẩu phải có ít nhất 8 ký tự.
                                        </span>
                                    </p>
                                )}
                                {errors.uppercaseError ? (
                                    <p className="text-xs text-red-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>{errors.uppercaseError}</span>
                                    </p>
                                ) : (
                                    <p className="text-xs text-green-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>
                                            Mật khẩu phải có ít nhất một chữ
                                            hoa.
                                        </span>
                                    </p>
                                )}
                                {errors.lowercaseError ? (
                                    <p className="text-xs text-red-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>{errors.lowercaseError}</span>
                                    </p>
                                ) : (
                                    <p className="text-xs text-green-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>
                                            Mật khẩu phải có ít nhất một chữ
                                            thường.
                                        </span>
                                    </p>
                                )}
                                {errors.specialCharacterError ? (
                                    <p className="text-xs text-red-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>
                                            {errors.specialCharacterError}
                                        </span>
                                    </p>
                                ) : (
                                    <p className="text-xs text-green-600 flex items-center gap-2 ">
                                        <span>
                                            <CiCircleCheck />
                                        </span>
                                        <span>
                                            Mật khẩu phải có ít nhất một ký tự
                                            đặc biệt (#,!, *, &, %).
                                        </span>
                                    </p>
                                )}
                                {/* {!errors.minLengthError &&
                                    !errors.uppercaseError &&
                                    !errors.lowercaseError &&
                                    !errors.specialCharacterError && (
                                        <span className="text-xs text-green-600">
                                            Mật khẩu đủ điều kiện.
                                        </span>
                                    )} */}
                            </div>
                            <div className="py-4">
                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 p-2 rounded-md text-white hover:opacity-80"
                                >
                                    Đăng Ký
                                </button>
                            </div>
                        </form>
                        <div>
                            <p className="text-sm text-gray-600">
                                Bạn đã có tài khoản?
                                <Link
                                    href="/account/login"
                                    className="text-base text-color-hover inline-block pl-1 hover:underline"
                                >
                                    Đăng nhập ngay
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
