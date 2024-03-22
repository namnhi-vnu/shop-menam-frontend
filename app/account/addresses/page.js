"use client";
import { useContext, useEffect, useState } from "react";

import Layout from "@/app/layouts/Layout";
import NavbarLeftAccount from "../../components/Header/NavbarLeftAccount";
import BannerTopPage from "../pages/BannerTopPage";
import { PiPlusBold } from "react-icons/pi";
import AddressItem from "./AddressItem";
import ModalFormAddress from "./ModalFormAddress";
import AuthLogin from "@/app/store/middleware/LoginAuth";
import AuthContext from "@/app/store/contexts/authContext";
const page = () => {
    AuthLogin();
    const [buttonsLabel, setButonsLabel] = useState(true);
    const { state, deleteAddressUser, setDefaultAddress, fillDataFormAddress } =
        useContext(AuthContext);
    const { listAddressUser } = state;
    const [coatingBody, setCoatingBody] = useState(false);

    useEffect(() => {
        const body = document.body;
        coatingBody
            ? body.classList.add("overflow-y-hidden", "active")
            : body.classList.remove("overflow-y-hidden", "active");
    }, [coatingBody]);
    // check label

    const handlerShowLable = () => {
        setButonsLabel(true);
        setCoatingBody(true);
    };
    // show modal update
    const showModalupdate = () => {
        setCoatingBody(!coatingBody);
        setButonsLabel(false);
    };
    const handerCloseModal = () => {
        setCoatingBody(!coatingBody);
    };
    // deleteAddressUser
    const handlerDeleteAddressUser = (id) => {
        deleteAddressUser(id);
    };
    // set isĐefault Address
    const handlerSetDefault = (id) => {
        setDefaultAddress(id);
    };

    // fill data address
    const handlerFillData = (id) => {
        fillDataFormAddress(id);
    };

    return (
        <Layout type="main">
            <div className="max-md:hidden">
                <BannerTopPage title="Địa chỉ" />
            </div>
            <div>
                <div className="container mx-auto py-7 ">
                    <div>
                        <div className="flex items-start gap-8 max-md:block">
                            <div>
                                <NavbarLeftAccount />
                            </div>
                            <div className="flex-1 ">
                                <div className="shadow">
                                    <div>
                                        <div className="p-5 py-[30px] border-b border-b-gray-200">
                                            {/* tab */}
                                            <div className="">
                                                <ul className="flex items-center justify-between ">
                                                    <li className="text-xl font-semibold">
                                                        Địa chỉ của tôi
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                handlerShowLable()
                                                            }
                                                            className="flex items-center gap-3 text-white bg-orange-500 hover:opacity-80 rounded-md px-3 py-1"
                                                        >
                                                            <span>
                                                                <PiPlusBold />
                                                            </span>
                                                            <span>
                                                                Thêm địa chỉ
                                                            </span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <div className="flex flex-col gap-4">
                                        {listAddressUser?.map((address) => (
                                            <AddressItem
                                                key={address?._id}
                                                address={address}
                                                handlerDeleteAddressUser={
                                                    handlerDeleteAddressUser
                                                }
                                                handlerSetDefault={
                                                    handlerSetDefault
                                                }
                                                handlerFillData={
                                                    handlerFillData
                                                }
                                                showModalupdate={
                                                    showModalupdate
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {coatingBody && (
                <ModalFormAddress
                    closeModal={handerCloseModal}
                    buttonsLabel={buttonsLabel}
                />
            )}
        </Layout>
    );
};

export default page;
