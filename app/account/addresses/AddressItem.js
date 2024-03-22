import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { PiPhoneLight, PiTrashThin } from "react-icons/pi";

const AddressItem = ({
    address,
    handlerDeleteAddressUser,
    handlerSetDefault,
    handlerFillData,
    showModalupdate,
}) => {
    const FilldataModal = () => {
        showModalupdate();
        handlerFillData(address?._id);
    };

    return (
        <div className="p-4 shadow rounded-md">
            <div className="flex items-start justify-between max-md:flex-col">
                <div className="">
                    <div className="flex items-center ">
                        <p className=" border-r pr-2 border-color-old-price">
                            {address?.fullname}
                        </p>
                        <p className="text-color-gray pl-2 flex items-center gap-1">
                            <span>
                                <PiPhoneLight />
                            </span>
                            <span> {address?.phone}</span>
                        </p>
                    </div>
                    <div className="text-color-gray font-light py-4">
                        <p>{address?.street}</p>
                        <p>
                            {address?.ward +
                                ", " +
                                address?.district +
                                ", " +
                                address?.city}
                        </p>
                    </div>
                    <div className="pb-2">
                        {address?.isDefault ? (
                            <p className="border border-orange-600 text-orange-600 rounded-md inline-block py-1 px-2 max-md:text-sm">
                                Mặc định
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flex items-end flex-col justify-between gap-8 max-md:flex-row max-md:pt-4 max-md:border-t border-gray-200">
                    <div className="">
                        <div className="flex items-center gap-2 ">
                            <button
                                onClick={() => FilldataModal()}
                                className="group"
                            >
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                                    <span
                                        aria-hidden
                                        className="absolute inset-0 bg-green-200 group-hover:bg-green-300 duration-300 opacity-50 rounded-full"
                                    ></span>
                                    <span className="flex items-center gap-2">
                                        <span className="relative">
                                            <BiMessageSquareEdit />
                                        </span>
                                        <span className="max-md:text-sm">
                                            Cập nhật
                                        </span>
                                    </span>
                                </span>
                            </button>
                            {address?.isDefault ? (
                                ""
                            ) : (
                                <button
                                    onClick={() =>
                                        handlerDeleteAddressUser(address?._id)
                                    }
                                    className="group"
                                >
                                    <span className="relative inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
                                        <span
                                            aria-hidden
                                            className="absolute inset-0 bg-red-200 group-hover:bg-red-300 duration-300 opacity-50 rounded-full"
                                        ></span>
                                        <span className="flex items-center gap-2">
                                            <span className="relative">
                                                <PiTrashThin />
                                            </span>
                                            <span className="max-md:text-sm">
                                                Xoá
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <button
                            onClick={() => handlerSetDefault(address?._id)}
                            className={`border border-gray-400 py-1 px-3 text-sm rounded-full text-gray-500 max-md:text-sm ${address?.isDefault ? " hover:cursor-not-allowed opacity-80" : "hover:opacity-80"} `}
                            disabled={address?.isDefault ? "disabled" : ""}
                        >
                            Đặt mặc định
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressItem;
