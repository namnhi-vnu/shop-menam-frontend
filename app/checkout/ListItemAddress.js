import React from "react";
import { PiPhoneLight, PiTrashThin } from "react-icons/pi";
const ListItemAddress = ({ address, handlerSetChangeAddress }) => {
    return (
        <div>
            <div className="p-4 shadow rounded-md mt-2">
                <div className="flex items-start justify-between">
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
                        <div>
                            {address?.isDefault ? (
                                <p className="border border-orange-600 text-sm text-orange-600 rounded-md inline-block py-1 px-2">
                                    Mặc định
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="flex items-end flex-col justify-between gap-8">
                        <div className="">
                            <button
                                onClick={() =>
                                    handlerSetChangeAddress(address?._id)
                                }
                                className={`border border-gray-400 py-1 px-3 text-sm rounded-full text-gray-500 duration-500 ${address?.isDefault ? " hover:cursor-not-allowed opacity-80" : "hover:bg-orange-500 hover:text-white hover:border-orange-500"} `}
                            >
                                Chọn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItemAddress;
