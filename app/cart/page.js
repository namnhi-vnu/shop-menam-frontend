"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlinePayments } from "react-icons/md";
import { FaHotjar } from "react-icons/fa";
import Layout from "../layouts/Layout";
import ProductCartItem from "./ProductCartItem";
import ShipmentDetails from "../components/ShipmentDetails";
import { useContext } from "react";
import CartContext from "../store/contexts/cartContext";
import { formatterPrice } from "../store/utils/FormatPrice";

const page = () => {
    const { state, dispatch, removeCart } = useContext(CartContext);
    const { cart } = state;
    const router = useRouter();
    const handlerCheckout = () => {
        router.push("/checkout");
    };
    const handlerRemoveCartItem = (id) => {
        removeCart(id);
    };

    if (cart?.cart === null || cart?.length === 0 || cart === null) {
        return (
            <Layout type="main">
                <div className="container mx-auto py-14">
                    <div className="flex items-center justify-center">
                        <div>
                            <p className="text-lg text-center">
                                Giỏ Hàng Trống
                            </p>
                            <Image
                                src="/empty-cart.jpg"
                                width={200}
                                height={200}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    } else {
        return (
            <Layout type="main">
                <div className="">
                    <div className="container mx-auto py-14">
                        <div>
                            <div className="grid grid-cols-3 gap-8 max-md:block">
                                {/* list */}
                                <div className="col-span-2 shadow rounded-md">
                                    <div className="p-5 flex items-center justify-between gap-3 border-b border-gray-100">
                                        <h3 className="text-xl font-semibold">
                                            Giỏ hàng
                                        </h3>
                                        <p className="flex items-center gap-1">
                                            <span className="font-semibold">
                                                ({" "}
                                                {cart?.cart?.products?.length ||
                                                    cart?.products?.length}{" "}
                                                )
                                            </span>
                                            <span>Sản phẩm</span>
                                        </p>
                                    </div>
                                    {/* coutdown time */}
                                    <div>
                                        <div className="p-5">
                                            <p className="flex items-center gap-3 bg-[#EAEAF3] p-2 rounded-md">
                                                <span className="text-red-500">
                                                    <FaHotjar />
                                                </span>
                                                Ưu đãi giỏ hàng sắp kết thúc!!
                                                Thanh toán trong 08 : 32 phút
                                                nữa để được ưu đãi.
                                            </p>
                                        </div>
                                    </div>
                                    <div></div>
                                    {/* head */}
                                    <div className="flex items-center p-5 pb-2 font-semibold max-md:justify-between">
                                        <div className="w-1/2">
                                            <p>Sản phẩm</p>
                                        </div>
                                        <div className="w-1/6 text-center max-md:hidden">
                                            <p>Đơn giá</p>
                                        </div>
                                        <div className="w-1/6 text-center max-md:hidden">
                                            <p>Số lượng</p>
                                        </div>
                                        <div className="w-1/6 text-end max-md:w-auto">
                                            <p>Tổng tiền</p>
                                        </div>
                                    </div>
                                    {/* item */}
                                    <div>
                                        {((cart?.products &&
                                            cart?.products?.length > 0) ||
                                            (cart?.cart?.products &&
                                                cart?.cart?.products.length >
                                                    0)) && (
                                            <>
                                                {/* not user */}
                                                {cart?.products?.map(
                                                    (product) => (
                                                        <ProductCartItem
                                                            key={
                                                                product.product
                                                                    ._id
                                                            }
                                                            product={product}
                                                            handlerRemoveCartItem={
                                                                handlerRemoveCartItem
                                                            }
                                                        />
                                                    ),
                                                )}
                                                {/* user */}
                                                {cart?.cart?.products?.map(
                                                    (product) => (
                                                        <ProductCartItem
                                                            key={product._id}
                                                            product={product}
                                                            handlerRemoveCartItem={
                                                                handlerRemoveCartItem
                                                            }
                                                        />
                                                    ),
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                                {/* pay */}
                                <div className="shadow rounded-md p-4 h-max">
                                    <div>
                                        <div>
                                            <p className="text-center">
                                                Giảm{" "}
                                                <span className="text-orange-500 font-semibold">
                                                    20K
                                                </span>{" "}
                                                cho đơn hàng từ{" "}
                                                <span className="text-orange-500 font-semibold">
                                                    399k
                                                </span>
                                            </p>
                                        </div>
                                        <div>{/* Coupon */}</div>
                                        <div className="py-4">
                                            <div className="flex items-center justify-between pb-3">
                                                <p className="font-semibold">
                                                    Tổng đơn hàng (tạm tính)
                                                </p>
                                                <p className="text-orange-500 font-semibold text-2xl">
                                                    {formatterPrice.format(
                                                        cart?.cart?.cartTotal ||
                                                            cart?.cartTotal ||
                                                            0,
                                                    )}
                                                </p>
                                            </div>
                                            <button
                                                onClick={handlerCheckout}
                                                className="bg-orange-500 hover:opacity-70 shadow-red-700 duration-300 text-white font-semibold w-full flex items-center justify-center gap-2 text-lg rounded-md p-2"
                                            >
                                                <span>
                                                    <MdOutlinePayments />
                                                </span>
                                                <span>Thanh Toán Ngay</span>
                                            </button>
                                            <div className="py-4 px-2">
                                                {/* line  */}
                                                <div
                                                    className={`bars ${cart?.cart?.cartTotal >= 399000 || cart?.cartTotal >= 399000 ? "complete" : "warning"} w-full relative bg-slate-200 h-2  rounded-full `}
                                                ></div>
                                                {cart?.cart?.cartTotal >=
                                                    399000 ||
                                                cart?.cartTotal >= 399000 ? (
                                                    <div className="py-4">
                                                        <p className="uppercase text-sm text-center text-color-green ">
                                                            Chúc mừng bạn đã
                                                            được{" "}
                                                            <span className="font-bold">
                                                                miễn phí vận
                                                                chuyển
                                                            </span>
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="py-4">
                                                        <p className="uppercase text-sm font-semibold">
                                                            <span className=" text-orange-500">
                                                                Miễn phí vận
                                                                chuyển
                                                            </span>{" "}
                                                            <span className="font-normal">
                                                                cho đơn hàng
                                                            </span>{" "}
                                                            <span className=" text-orange-500">
                                                                399k
                                                            </span>
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <ShipmentDetails />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
};

export default page;
