"use client";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingTag, CiTrash } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import { formatterPrice } from "../store/utils/FormatPrice";
import { useContext } from "react";
import CartContext from "../store/contexts/cartContext";

const ProductCartItem = ({ product, handlerRemoveCartItem }) => {
    // console.log(product);
    const { state, setUpdatePlusCart } = useContext(CartContext);
    const { cart } = state;
    const handerPlus = (productId, quantity, action) => {
        setUpdatePlusCart(cart, productId, quantity, action);
    };
    // console.log(product?.product?._id);
    const handlerRemoveCartItems = (id) => {
        handlerRemoveCartItem(id);
    };
    return (
        <div>
            <div className="p-5 border-b border-gray-100">
                <div>
                    <div className="flex max-md:block">
                        {/* image */}
                        <div className="flex gap-2 w-1/2 max-md:hidden">
                            <Image
                                src={product?.image[0]?.url}
                                width={120}
                                height={120}
                                alt=""
                                className="w-auto rounded-md max-md:w-12 max-md:h-12"
                            />
                            <div>
                                <h2 title="">
                                    <Link
                                        href={`/product/${product?.product?.slug || product?.slug}`}
                                        className="hover:text-orange-500 duration-300 font-normal"
                                    >
                                        {product?.title ||
                                            product?.product?.title}
                                    </Link>
                                </h2>
                                {/* category */}
                                <p className=" pt-2 text-sm ">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span
                                            aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                        ></span>
                                        <span className="flex items-center gap-2 ">
                                            <span className="relative text-orange-500">
                                                <CiShoppingTag />
                                            </span>
                                            <span className="">
                                                {product?.product?.category ||
                                                    product?.category}
                                            </span>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        {/* price */}
                        <div className="w-1/6 max-md:hidden">
                            <div className="text-center flex flex-col ">
                                <span className="text-sm line-through">
                                    1.250.000 đ
                                </span>
                                <span className="text-orange-500 text-sm">
                                    {formatterPrice.format(product?.price)}
                                </span>
                            </div>
                        </div>
                        {/* quantity */}
                        <div className="w-1/6 max-md:hidden">
                            <div className="flex items-center justify-center">
                                <div className="text-[#62676D] font-semibold flex items-center">
                                    <button
                                        onClick={() =>
                                            handerPlus(
                                                product?.product?._id ||
                                                    product?._id,
                                                1,
                                                "decrease",
                                            )
                                        }
                                        className="w-9 h-9 border flex items-center justify-center"
                                    >
                                        <FiMinus />
                                    </button>
                                    <input
                                        type="text"
                                        min="0"
                                        maxLength="3"
                                        readOnly
                                        value={product?.count}
                                        className="w-9 text-center outline-none border-t border-b h-9"
                                    />
                                    <button
                                        onClick={() =>
                                            handerPlus(
                                                product?.product?._id ||
                                                    product?._id,
                                                1,
                                                "increase",
                                            )
                                        }
                                        className="w-9 h-9 border flex items-center justify-center"
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* total */}
                        <div className="w-1/6 flex flex-col text-end  text-sm font-semibold text-orange-500 max-md:hidden">
                            <div className="flex-auto">
                                <div className="">
                                    <span className="flex-1">
                                        {formatterPrice.format(
                                            product?.price * product?.count,
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() =>
                                        handlerRemoveCartItems(
                                            product?.product?._id,
                                        )
                                    }
                                    className="flex-1 text-lg text-red-600"
                                >
                                    <CiTrash />
                                </button>
                            </div>
                        </div>

                        {/* mobile  */}
                        <div className="lg:hidden max-md:flex justify-between">
                            <div>
                                <div className="flex gap-2 ">
                                    <Image
                                        src={product?.image[0]?.url}
                                        width={120}
                                        height={120}
                                        alt=""
                                        className="w-auto rounded-md max-md:w-14 max-md:h-14"
                                    />
                                    <div>
                                        <h2 title="">
                                            <Link
                                                href={`/product/${product?.product?.slug || product?.slug}`}
                                                className="hover:text-orange-500 duration-300 font-normal"
                                            >
                                                {product?.title ||
                                                    product?.product?.title}
                                            </Link>
                                        </h2>
                                        <div className="">
                                            <div className="flex items-center justify-start mt-2">
                                                <div className="text-[#62676D] font-semibold flex items-center">
                                                    <button
                                                        onClick={() =>
                                                            handerPlus(
                                                                product?.product
                                                                    ?._id ||
                                                                    product?._id,
                                                                1,
                                                                "decrease",
                                                            )
                                                        }
                                                        className="w-9 h-9 border flex items-center justify-center"
                                                    >
                                                        <FiMinus />
                                                    </button>
                                                    <input
                                                        type="text"
                                                        min="0"
                                                        maxLength="3"
                                                        readOnly
                                                        value={product?.count}
                                                        className="w-9 text-center outline-none border-t border-b h-9"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            handerPlus(
                                                                product?.product
                                                                    ?._id ||
                                                                    product?._id,
                                                                1,
                                                                "increase",
                                                            )
                                                        }
                                                        className="w-9 h-9 border flex items-center justify-center"
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/6 flex flex-col text-end  text-sm font-semibold text-orange-500">
                                <div className="flex-auto">
                                    <div className="">
                                        <span className="flex-1">
                                            {formatterPrice.format(
                                                product?.price * product?.count,
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button className="flex-1 text-lg text-red-600">
                                        <CiTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCartItem;
