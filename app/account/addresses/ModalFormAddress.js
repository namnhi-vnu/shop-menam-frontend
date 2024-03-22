"use client";
import { useContext, useState } from "react";
import AddressDatasForm from "./AddressDatasForm";
import AuthContext from "@/app/store/contexts/authContext";
import { setNewFormAddress } from "@/app/store/actions/authAction";

const ModalFormAddress = ({ closeModal, buttonsLabel }) => {
    const { state, dispatch, newAddressUser, updateAddress } =
        useContext(AuthContext);
    const { getFormNewAddress } = state;
    const {
        getFormNewAddress: {
            fullname,
            phone,
            street,
            city,
            district,
            ward,
            _id,
        },
    } = state;

    const getFormAddress = (e) => {
        dispatch(setNewFormAddress({ [e.target.name]: e.target.value }));
    };
    const handlerCreateAddress = (e) => {
        e.preventDefault();
        newAddressUser(getFormNewAddress);
        dispatch(
            setNewFormAddress({
                fullname: "",
                phone: "",
                street: "",
                city: "",
                district: "",
                ward: "",
            }),
        );
        closeModal();
    };

    const handlerRemoveSubmit = (e) => {
        e.preventDefault();
        dispatch(
            setNewFormAddress({
                fullname: "",
                phone: "",
                street: "",
                city: "",
                district: "",
                ward: "",
            }),
        );
        closeModal();
    };
    const handlerUpdateAddress = (e) => {
        e.preventDefault();
        updateAddress(_id, getFormNewAddress);

        dispatch(
            setNewFormAddress({
                fullname: "",
                phone: "",
                street: "",
                city: "",
                district: "",
                ward: "",
            }),
        );
        closeModal();
    };

    return (
        <div className="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2   z-30 ">
            {/* Modal  */}
            <div className="w-[600px] max-md:w-screen  max-md:px-2  ">
                <div className="bg-white px-4 py-8 rounded-md shadow border border-gray-100">
                    <div className="pb-2">
                        <h2 className="text-xl">Địa chỉ mới</h2>
                    </div>
                    <div>
                        <form action="">
                            <div className="py-4 flex items-center gap-4">
                                <input
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    onChange={(e) => getFormAddress(e)}
                                    placeholder="Họ và tên"
                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 hover:border-orange-500"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => getFormAddress(e)}
                                    placeholder="Số điện thoại"
                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 hover:border-orange-500"
                                />
                            </div>
                            <div className="py-2">
                                <AddressDatasForm
                                    dispatch={dispatch}
                                    blocks="flex items-center"
                                    city={city}
                                    district={district}
                                    ward={ward}
                                />
                            </div>
                            <div className="py-4">
                                <input
                                    type="text"
                                    name="street"
                                    value={street}
                                    onChange={(e) => getFormAddress(e)}
                                    placeholder="Địa chỉ cụ thể"
                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 hover:border-orange-500"
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={(e) => handlerRemoveSubmit(e)}
                                    className="border border-orange-500 rounded-md py-1 px-4 hover:opacity-70"
                                >
                                    Đóng
                                </button>
                                {buttonsLabel ? (
                                    <button
                                        onClick={(e) => handlerCreateAddress(e)}
                                        className="bg-orange-500 text-white rounded-md py-1 px-4 hover:opacity-80"
                                    >
                                        Thêm mới
                                    </button>
                                ) : (
                                    <button
                                        onClick={(e) => handlerUpdateAddress(e)}
                                        className="bg-orange-500 text-white rounded-md py-1 px-4 hover:opacity-80"
                                    >
                                        Cập nhật
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFormAddress;
