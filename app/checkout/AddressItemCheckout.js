import React from "react";
import { PiPhoneLight } from "react-icons/pi";
const AddressItemCheckout = ({ address, handlerChangeAddress }) => {
    return (
        <div className="p-4 shadow rounded-md">
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
                    <div className="flex gap-4 items-center">
                        {address?.isDefault ? (
                            <p className="border border-orange-600 text-orange-600 rounded-md text-sm inline-block py-1 px-2">
                                Mặc định
                            </p>
                        ) : (
                            ""
                        )}
                        <button
                            onClick={handlerChangeAddress}
                            className="bg-teal-500 border border-teal-500 text-white text-sm py-1 px-2 rounded-md"
                        >
                            Thay đổi địa chỉ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressItemCheckout;
