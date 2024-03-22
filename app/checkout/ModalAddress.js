import React from "react";
import ListItemAddress from "./ListItemAddress";

const ModalAddress = ({
    listAddressUser,
    handlerCloseModal,
    handlerSetChangeAddress,
}) => {
    return (
        <div className="absolute top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md rounded-lg">
            <div>
                <div className="pb-4 border-b border-gray-200">
                    <p className="text-xl">Địa chỉ của bạn</p>
                </div>
                <div className="pt-4">
                    {listAddressUser?.map((address) => (
                        <ListItemAddress
                            key={address._id}
                            address={address}
                            handlerSetChangeAddress={handlerSetChangeAddress}
                        />
                    ))}
                </div>
                <div className="pt-8">
                    <button
                        className="border border-orange-500 px-3 py-1 rounded-md hover:bg-orange-500 duration-500"
                        onClick={handlerCloseModal}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAddress;
