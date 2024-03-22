"use client";
import Link from "next/link";
import { GrFormPreviousLink } from "react-icons/gr";
import CheckoutProductItem from "./CheckoutProductItem";
import { useContext } from "react";
import CartContext from "../store/contexts/cartContext";
import { formatterPrice } from "../store/utils/FormatPrice";
import Loading from "../components/Loading";

const FormCheckout = ({ handlerCheckout, user, handlerCheckoutNotUser }) => {
    const {
        state: { cart, isLoadingCreateOrder, checkoutInformation },
    } = useContext(CartContext);

    return (
        <div className="bg-green-100 h-max p-4 -mt-16 max-md:mt-0 max-lg:mt-0 border-2 border-white rounded-md relative">
            <span className="absolute w-6 h-8 rounded-full bg-white -left-3 bottom-24"></span>
            <span className="absolute border-t-4 border-dashed border-white w-full left-0 bottom-28"></span>
            <span className="absolute w-6 h-8 rounded-full bg-white -right-3 bottom-24"></span>

            <div className="pb-10">
                <div className="pb-4 flex items-center gap-4 border-b border-dotted border-green-400">
                    <h2 className="text-lg font-semibold  ">Đơn Hàng</h2>
                    <span>
                        ({" "}
                        {cart?.cart?.products?.length > 0 ||
                        cart?.products?.length > 0
                            ? cart?.cart?.products?.length ||
                              cart?.products?.length
                            : "0"}{" "}
                        ) Sản phẩm
                    </span>
                </div>
                <div>
                    {/* not user */}
                    {cart?.products?.length > 0 &&
                        cart?.products?.map((product) => (
                            <CheckoutProductItem
                                key={product.product._id}
                                product={product}
                            />
                        ))}
                    {/* user */}
                    {cart?.cart?.products?.length > 0 &&
                        cart?.cart?.products?.map((product) => (
                            <CheckoutProductItem
                                key={product._id}
                                product={product}
                            />
                        ))}
                </div>
                <div className="py-8">
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Nhập mã giảm giá"
                                className="w-full p-2 rounded-sm outline-none  border border-gray-200 focus:border-orange-500"
                            />
                        </div>
                        <button className="py-1 px-2 block bg-orange-500 rounded-md text-white hover:opacity-80">
                            Áp dụng
                        </button>
                    </div>
                </div>
                <div>
                    <div className="pb-4 border-b border-dotted border-green-400">
                        <div className="flex items-center justify-between py-1">
                            <p>Tạm tính</p>
                            <p>
                                {formatterPrice.format(
                                    cart?.cart?.cartTotal || cart?.cartTotal,
                                )}
                            </p>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <p>Phí vận chuyển</p>
                            <p>Miễn phí</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-4 pb-14">
                        <p className="text-lg font-semibold">Tổng Cộng</p>
                        <p className="text-2xl text-red-500 font-semibold">
                            {formatterPrice.format(
                                cart?.cart?.cartTotal || cart?.cartTotal,
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-4 flex justify-between items-center">
                    <Link
                        href="/cart"
                        className="text-orange-500 flex items-center gap-2"
                    >
                        <span>
                            <GrFormPreviousLink />
                        </span>
                        Quay về giỏ hàng
                    </Link>
                    {user ? (
                        <button
                            onClick={handlerCheckout}
                            className="text-white bg-orange-500 hover:opacity-70 rounded-md py-2 px-5"
                        >
                            {isLoadingCreateOrder ? <Loading /> : "Đặt hàng"}
                        </button>
                    ) : (
                        <button
                            onClick={handlerCheckoutNotUser}
                            className="text-white bg-orange-500 hover:opacity-70 rounded-md py-2 px-5"
                        >
                            {isLoadingCreateOrder ? <Loading /> : "Đặt hàng"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormCheckout;
