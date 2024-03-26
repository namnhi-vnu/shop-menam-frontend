"use client";
import Link from "next/link";

import Layout from "../layouts/Layout";
import AddressDatasForm from "../account/addresses/AddressDatasForm";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import FormCheckout from "./FormCheckout";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/contexts/cartContext";
import Loading from "../components/Loading";
import AuthContext from "../store/contexts/authContext";
import AddressItemCheckout from "./AddressItemCheckout";
import ModalAddress from "./ModalAddress";
import { setFormOrderByUser } from "../store/actions/cartAction";
const page = () => {
    const { state, dispatch, createOrderUser, createOrderNotUser } =
        useContext(CartContext);
    const {
        state: { user },
        setDefaultAddress,
    } = useContext(AuthContext);
    const { checkoutInformation } = state;
    const {
        cart,
        isLoading,
        checkoutInformation: {
            paymentMethod,
            orderDetails: {
                fullname,
                phone,
                street,
                desception,
                city,
                district,
                ward,
            },
            products,
        },
    } = state;
    const [showBilling, setShowBilling] = useState("");
    const [showModalAddress, setModalAddress] = useState(false);

    // console.log(fullname, phone, street, desception, city, district, ward);

    const {
        state: { listAddressUser },
    } = useContext(AuthContext);

    const handlerChangeAddress = () => {
        setModalAddress(!showModalAddress);
    };
    const handlerCloseModal = () => {
        setModalAddress(!showModalAddress);
    };

    const handlerSetChangeAddress = (id) => {
        setDefaultAddress(id);
        setModalAddress(!showModalAddress);
    };

    useEffect(() => {
        const body = document.body;
        showModalAddress
            ? body.classList.add("overflow-y-hidden", "active")
            : body.classList.remove("overflow-y-hidden", "active");
    }, [showModalAddress]);

    // get orderdetails
    const handlerGetOrderDetails = (e) => {
        dispatch(
            setFormOrderByUser({
                orderDetails: { [e.target.name]: e.target.value },
            }),
        );
    };

    // check out
    const handlerCheckout = () => {
        if (listAddressUser.length > 0 && paymentMethod !== "") {
            createOrderUser(checkoutInformation);
        }
    };
    const handlerCheckoutNotUser = () => {
        if (
            fullname !== "" &&
            phone !== "" &&
            street !== "" &&
            city !== "" &&
            district !== "" &&
            ward !== "" &&
            paymentMethod !== ""
        ) {
            createOrderNotUser(checkoutInformation);
        }
    };

    // get value payment method
    const getPaymentMethod = (e) => {
        dispatch(setFormOrderByUser({ [e.target.name]: e.target.value }));
        dispatch(setFormOrderByUser({ products: cart }));
        dispatch(setFormOrderByUser({ cartTotal: cart.cartTotal }));
    };
    const handlerCheckBillingInformation = (value) => {
        setShowBilling(value);
    };
    if (isLoading) {
        return (
            <Layout type="checkout">
                <div className="min-h-screen bg-[#E4F5FF] py-8 flex items-center justify-center max-md:px-3">
                    <Loading />
                </div>
            </Layout>
        );
    } else if (
        cart?.cart === null ||
        cart?.length === 0 ||
        cart === undefined
    ) {
        return (
            <Layout type="checkout">
                <div className="min-h-screen bg-[#E4F5FF] py-8 flex items-start justify-center max-md:px-3">
                    <div>
                        <div className="pb-8 ">
                            <h1 className="text-2xl border-b border-gray-300 pb-2 font-semibold text-orange-500">
                                <Link href="/">Shop Mẹ Nấm</Link>
                            </h1>
                            <div></div>
                        </div>
                        <p className="text-xl py-2">
                            Trang Bạn Tìm không tồn tại
                        </p>
                        <p>
                            URL bạn nhập có thể đã hết hạn, bị xóa hoặc không
                            hợp lệ. Quay trở lại trang chủ để tiếp tục mua hàng.
                        </p>
                        <div className="py-4">
                            <Link
                                href="/"
                                className="bg-orange-500 rounded-md inline-block py-2 px-4 text-white"
                            >
                                Quay về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return (
            <div>
                <Layout type="checkout">
                    <div className="min-h-screen bg-[#E4F5FF] py-8 flex items-center justify-center max-md:px-3">
                        <div className="container mx-auto bg-white rounded-md p-5 max-md:p-2 max-md:overflow-hidden">
                            <div>
                                <div className="grid grid-cols-3 gap-8 max-md:block max-lg:grid-cols-2">
                                    <div className="col-span-2 max-lg:col-span-1 ">
                                        <div>
                                            <div className="pb-8">
                                                <h1 className="text-2xl font-semibold text-orange-500">
                                                    <Link href="/">
                                                        Shop Mẹ Nấm
                                                    </Link>
                                                </h1>
                                                <div></div>
                                            </div>
                                            {/* addreses */}
                                            <div className="flex gap-8 max-md:block max-lg:block">
                                                <div className="flex-1">
                                                    <div className="pb-2">
                                                        <p className="text-lg font-semibold">
                                                            Thông tin giao hàng
                                                        </p>
                                                    </div>
                                                    {listAddressUser.length >
                                                    0 ? (
                                                        <div className="py-4 border-t border-gray-200">
                                                            {listAddressUser?.map(
                                                                (
                                                                    address,
                                                                    index,
                                                                ) => {
                                                                    if (
                                                                        address.isDefault
                                                                    ) {
                                                                        return (
                                                                            <AddressItemCheckout
                                                                                key={
                                                                                    address._id
                                                                                }
                                                                                address={
                                                                                    address
                                                                                }
                                                                                handlerChangeAddress={
                                                                                    handlerChangeAddress
                                                                                }
                                                                            />
                                                                        );
                                                                    } else if (
                                                                        index ===
                                                                        0
                                                                    ) {
                                                                        return (
                                                                            <AddressItemCheckout
                                                                                key={
                                                                                    address._id
                                                                                }
                                                                                address={
                                                                                    address
                                                                                }
                                                                                handlerChangeAddress={
                                                                                    handlerChangeAddress
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                },
                                                            )}
                                                            <div className="py-4 mt-8 border-t border-gray-200">
                                                                <p>
                                                                    Vui lòng
                                                                    kiểm tra kỹ
                                                                    thông tin
                                                                    giao hàng.
                                                                </p>
                                                                <p>
                                                                    Xin cảm ơn
                                                                    quý khách!
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <form>
                                                            <div>
                                                                <p className="">
                                                                    <Link
                                                                        href="/account/login"
                                                                        className="text-orange-500"
                                                                    >
                                                                        Đăng
                                                                        nhập
                                                                    </Link>{" "}
                                                                    /{" "}
                                                                    <Link
                                                                        href="/account/signup"
                                                                        className="text-orange-500"
                                                                    >
                                                                        Đăng ký
                                                                    </Link>{" "}
                                                                    tài khoản để
                                                                    theo dõi đơn
                                                                    hàng của bạn{" "}
                                                                </p>
                                                            </div>
                                                            <div className="py-2">
                                                                <input
                                                                    type="text"
                                                                    name="fullname"
                                                                    value={
                                                                        fullname
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        handlerGetOrderDetails(
                                                                            e,
                                                                        )
                                                                    }
                                                                    placeholder="Họ và tên"
                                                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 "
                                                                />
                                                            </div>
                                                            <div className="py-2">
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    value={
                                                                        phone
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        handlerGetOrderDetails(
                                                                            e,
                                                                        )
                                                                    }
                                                                    placeholder="Số điện thoại"
                                                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 "
                                                                />
                                                            </div>
                                                            <div className="py-2">
                                                                <input
                                                                    type="text"
                                                                    name="street"
                                                                    value={
                                                                        street
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        handlerGetOrderDetails(
                                                                            e,
                                                                        )
                                                                    }
                                                                    placeholder="Địa chỉ"
                                                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 "
                                                                />
                                                            </div>
                                                            <div>
                                                                <AddressDatasForm
                                                                    dispatch={
                                                                        dispatch
                                                                    }
                                                                    blocks=" flex-col items-start"
                                                                />
                                                            </div>
                                                            <div className="py-2">
                                                                <textarea
                                                                    name="desception"
                                                                    value={
                                                                        desception
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        handlerGetOrderDetails(
                                                                            e,
                                                                        )
                                                                    }
                                                                    id=""
                                                                    cols="10"
                                                                    rows="4"
                                                                    placeholder="Ghi chú "
                                                                    className="p-2  w-full outline-none rounded-lg border border-gray-200 focus:border-orange-500 "
                                                                ></textarea>
                                                            </div>
                                                        </form>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div>
                                                        <div className="max-md:hidden">
                                                            <div className="pb-2">
                                                                <p className="text-lg font-semibold">
                                                                    Vận chuyển
                                                                </p>
                                                            </div>
                                                            {/*  */}
                                                            <div className="pt-2">
                                                                <p className="p-2  text-green-900 bg-green-100 rounded-md text-center">
                                                                    Vui lòng
                                                                    nhập thông
                                                                    tin giao
                                                                    hàng
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="py-4">
                                                            <div className="py-4">
                                                                <p className="text-lg font-semibold">
                                                                    Thanh toán
                                                                </p>
                                                            </div>
                                                            <div className=" border border-gray-200 checkoutpaymenthod">
                                                                <div className="p-4 border-b border-gray-200">
                                                                    <label
                                                                        htmlFor="thanhtoannhanhang"
                                                                        className="cursor-pointer"
                                                                        onClick={() =>
                                                                            handlerCheckBillingInformation(
                                                                                "Thanh toán khi nhận hàng",
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="flex items-center gap-2">
                                                                                <input
                                                                                    className="sr-only"
                                                                                    type="radio"
                                                                                    name="paymentMethod"
                                                                                    id="thanhtoannhanhang"
                                                                                    value="Thanh toán khi nhận hàng"
                                                                                    checked={
                                                                                        paymentMethod ===
                                                                                        "Thanh toán khi nhận hàng"
                                                                                    }
                                                                                    onChange={
                                                                                        getPaymentMethod
                                                                                    }
                                                                                />{" "}
                                                                                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 dark:border-strokedark ">
                                                                                    <span className="text-white tich w-3 h-3 rounded-full"></span>
                                                                                </div>
                                                                                <span>
                                                                                    Thanh
                                                                                    toán
                                                                                    khi
                                                                                    nhận
                                                                                    hàng
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-color-green text-xl">
                                                                                <FaHandHoldingDollar />
                                                                            </span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="p-4">
                                                                    <label
                                                                        htmlFor="chuyenkhoannganhang"
                                                                        className="cursor-pointer"
                                                                        onClick={() =>
                                                                            handlerCheckBillingInformation(
                                                                                "Chuyển khoản ngân hàng",
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="flex items-center gap-2">
                                                                                <input
                                                                                    className="sr-only"
                                                                                    type="radio"
                                                                                    name="paymentMethod"
                                                                                    id="chuyenkhoannganhang"
                                                                                    value="Chuyển khoản ngân hàng"
                                                                                    checked={
                                                                                        paymentMethod ===
                                                                                        "Chuyển khoản ngân hàng"
                                                                                    }
                                                                                    onChange={
                                                                                        getPaymentMethod
                                                                                    }
                                                                                />{" "}
                                                                                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 dark:border-strokedark ">
                                                                                    <span className="text-white tich w-3 h-3 rounded-full"></span>
                                                                                </div>
                                                                                <span>
                                                                                    Chuyển
                                                                                    khoản
                                                                                    ngân
                                                                                    hàng
                                                                                </span>
                                                                            </span>
                                                                            <span className="text-color-green text-xl">
                                                                                <IoPhonePortraitOutline />
                                                                            </span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* thanh toán */}
                                                        {showBilling ===
                                                        "Chuyển khoản ngân hàng" ? (
                                                            <div className="py-2 ">
                                                                <div className="border-dashed border border-gray-200 p-2 rounded-md">
                                                                    <p>
                                                                        Thông
                                                                        tin tài
                                                                        khoản
                                                                    </p>
                                                                    <div>
                                                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200">
                                                                            <span>
                                                                                Số
                                                                                tài
                                                                                khoản
                                                                            </span>
                                                                            <span>
                                                                                4830656731
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200">
                                                                            <span>
                                                                                Ngân
                                                                                hàng
                                                                            </span>
                                                                            <span>
                                                                                BIDV
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200">
                                                                            <span>
                                                                                Chủ
                                                                                tài
                                                                                khoản
                                                                            </span>
                                                                            <span>
                                                                                HOÀNG
                                                                                THỊ
                                                                                NGA
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : showBilling ===
                                                          "Thanh toán khi nhận hàng" ? (
                                                            <div className="py-2">
                                                                <div className="border-dashed border border-gray-200 p-2 rounded-md">
                                                                    <p>
                                                                        Bạn chỉ
                                                                        phải
                                                                        thanh
                                                                        toán khi
                                                                        nhận
                                                                        được
                                                                        hàng
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <FormCheckout
                                            handlerCheckout={handlerCheckout}
                                            handlerCheckoutNotUser={
                                                handlerCheckoutNotUser
                                            }
                                            user={user}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal address */}
                    {showModalAddress && (
                        <ModalAddress
                            listAddressUser={listAddressUser}
                            handlerCloseModal={handlerCloseModal}
                            handlerSetChangeAddress={handlerSetChangeAddress}
                        />
                    )}
                </Layout>
            </div>
        );
    }
};

export default page;
