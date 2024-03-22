"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import ProductItemCart from "./ProductItemCart";
import AuthContext from "@/app/store/contexts/authContext";
import CartContext from "@/app/store/contexts/cartContext";
import { formatterPrice } from "@/app/store/utils/FormatPrice";
const CartView = () => {
    const { state } = useContext(CartContext);
    const { cart } = state;

    return (
        <div>
            <div className="absolute z-10 bg-white min-w-[400px] top-full -right-[150px] shadow-lg p-2 rounded-lg border">
                <div className="relative">
                    <div className="absolute -top-[20px] right-[40%] w-0 h-0 border-solid border-t-0 border-r-[11px] border-b-[11px] border-l-[11px] border-t-transparent border-r-transparent border-b-slate-100 border-l-transparent"></div>
                    <div className="text-base"></div>
                    {cart?.cart?.products?.length > 0 ||
                    cart?.products?.length > 0 ? (
                        <div>
                            <div className="pb-3">
                                <p className="text-gray-500 text-lg border-b pb-1 border-gray-100 select-none">
                                    Sản phẩm của bạn
                                </p>
                            </div>
                            <div className="flex flex-col gap-6 pb-8">
                                {((cart?.products &&
                                    cart.products.length > 0) ||
                                    (cart?.cart?.products &&
                                        cart.cart.products.length > 0)) && (
                                    <>
                                        {cart?.products?.map((product) => (
                                            <ProductItemCart
                                                key={product.product._id}
                                                product={product}
                                            />
                                        ))}
                                        {cart?.cart?.products?.map(
                                            (product) => (
                                                <ProductItemCart
                                                    key={product._id}
                                                    product={product}
                                                />
                                            ),
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="text-end pb-1 flex items-center justify-between ">
                                <p className="text-orange-600">
                                    Tổng:{" "}
                                    {formatterPrice.format(
                                        cart?.cart?.cartTotal ||
                                            cart?.cartTotal,
                                    )}
                                </p>
                                <Link
                                    href="/cart"
                                    className="inline-block bg-orange-500 px-4 py-1 rounded-lg text-base text-white"
                                >
                                    Xem giỏ hàng
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="pb-3">
                                <p className="text-gray-500 text-lg select-none text-center">
                                    Bạn chưa có sản phẩm nào
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-6 pb-8">
                                <Image
                                    src="/empty-cart.jpg"
                                    width={150}
                                    height={150}
                                    alt=""
                                />
                            </div>
                            {/* <div className="text-end pb-1">
                                <Link
                                    href="/cart"
                                    className="inline-block bg-color-hover px-4 py-1 rounded-lg text-base text-white"
                                >
                                    Xem giỏ hàng
                                </Link>
                            </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartView;
