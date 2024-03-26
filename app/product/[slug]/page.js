"use client";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/layouts/Layout";
import {
    FaStar,
    FaFacebook,
    FaFacebookMessenger,
    FaTwitter,
} from "react-icons/fa";
import ShipmentDetails from "@/app/components/ShipmentDetails";
import { FaHotjar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import ProductContext from "@/app/store/contexts/prdContext";
import { formatterPrice } from "@/app/store/utils/FormatPrice";
import CartContext from "@/app/store/contexts/cartContext";
import { useRouter } from "@/node_modules/next/navigation";

const page = ({ params }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const { state, getProductDetails } = useContext(ProductContext);
    const { addCart } = useContext(CartContext);
    const { slug } = params;
    const { productDetail } = state;

    const handlerQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handlerQuantityPlus = (action) => {
        if (action === "increase") {
            setQuantity(quantity + 1);
        } else if (action === "decrease") {
            if (quantity >= 2) {
                setQuantity(quantity - 1);
            }
        }
    };
    // xư lý % giảm giá
    const priceSale =
        ((productDetail?.product?.oldPrice - productDetail?.product?.price) /
            productDetail?.product?.oldPrice) *
            100 || 0;
    // xử lý thêm giỏ hàng
    const handlerAddCart = (productId, quantity) => {
        addCart(productId, quantity);
    };
    // xử lý mua ngay
    const handlerPayNow = (productId, quantity) => {
        addCart(productId, quantity);
        router.push("/checkout");
    };
    useEffect(() => {
        getProductDetails(slug);
    }, [slug]);
    return (
        <Layout type="main">
            <div className="">
                <div className="container  mx-auto py-8">
                    <div>
                        <div className="bg-white shadow p-4 rounded-md">
                            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-3">
                                {/* left */}
                                <div>
                                    <div>
                                        <Image
                                            src={`${productDetail?.product?.image[0]?.url || "/image-default.png"}`}
                                            width={1200}
                                            height={1200}
                                            alt=""
                                            className="w-full h-full rounded-md object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <div className="flex items-center gap-3 py-4">
                                                <p>Chia sẻ</p>
                                                <ul className="flex items-center gap-3 text-2xl">
                                                    <li className="text-[#0866FF]">
                                                        <Link href="">
                                                            <span>
                                                                <FaFacebook />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#0866FF]">
                                                        <Link href="">
                                                            <span>
                                                                <FaFacebookMessenger />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="text-[#10C2FF]">
                                                        <Link href="">
                                                            <span>
                                                                <FaTwitter />
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div>
                                    <div>
                                        <h1
                                            className="text-2xl font-semibold pb-4 "
                                            title={`${productDetail?.product?.title || ""}`}
                                        >
                                            {productDetail?.product?.title}
                                        </h1>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <div>
                                                <span className="py-1 px-2 bg-green-200 rounded-full text-green-900 text-sm">
                                                    {
                                                        productDetail?.product
                                                            ?.category
                                                    }
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 font-light">
                                                <ul className="flex items-center text-orange-600">
                                                    <li>
                                                        <FaStar />
                                                    </li>
                                                    <li>
                                                        <FaStar />
                                                    </li>
                                                    <li>
                                                        <FaStar />
                                                    </li>
                                                    <li>
                                                        <FaStar />
                                                    </li>
                                                    <li>
                                                        <FaStar />
                                                    </li>
                                                </ul>
                                                <span className="text-gray-400">
                                                    (20)
                                                </span>
                                                <span className="border-l border-gray-400 pl-2 inline-block">
                                                    1.5K{" "}
                                                    <span className="text-gray-400">
                                                        Đã bán
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <div className="">
                                            <div className="flex items-center gap-8 py-2 px-2 bg-orange-50 max-md:flex-col max-md:gap-2 max-md:items-end">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-base text-color-old-price line-through font-semibold">
                                                        {formatterPrice.format(
                                                            productDetail
                                                                ?.product
                                                                ?.oldPrice || 0,
                                                        )}
                                                    </span>
                                                    <span className="text-[26px] text-orange-600 font-bold">
                                                        {formatterPrice.format(
                                                            productDetail
                                                                ?.product
                                                                ?.price || 0,
                                                        )}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="w-[85px] before:left-[-24%] rounded-[1px] text-xs bg-red-500 text-white py-[2px] px-1 relative  before:border-l-[10px] before:border-r-[11px] before:border-b-[10px] before:border-t-[10px] before:border-t-transparent before:border-b-transparent before:border-red-500 before:absolute before:block before:content-['']  before:top-0 before:bottom-0 before:border-l-transparent">
                                                        {priceSale.toFixed(0)} %
                                                        GIẢM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <div>
                                            <p className="flex items-center gap-3 bg-[#EAEAF3] p-2 rounded-md">
                                                <span className="text-red-500">
                                                    <FaHotjar />
                                                </span>
                                                Nhanh tay!! Để được giá khuyến
                                                mãi
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-4">
                                        <ShipmentDetails />
                                    </div>
                                    <div>
                                        <div className="py-4">
                                            <div className="flex items-center gap-8">
                                                <div>
                                                    <p className="text-[#62676D]">
                                                        Số lượng:{" "}
                                                    </p>
                                                </div>
                                                <div className="text-[#62676D] font-semibold flex items-center">
                                                    <button
                                                        onClick={() =>
                                                            handlerQuantityPlus(
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
                                                        value={quantity}
                                                        onChange={
                                                            handlerQuantity
                                                        }
                                                        className="w-9 text-center outline-none border-t border-b h-9"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            handlerQuantityPlus(
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
                                    <div>
                                        <div>
                                            <div className="grid grid-cols-2 gap-4 py-8">
                                                <button
                                                    onClick={() =>
                                                        handlerAddCart(
                                                            productDetail
                                                                ?.product?._id,
                                                            quantity,
                                                        )
                                                    }
                                                    className="flex items-center justify-center font-semibold gap-2 py-2 px-4 bg-gradient-to-r from-[rgba(0,172,238,1)] to-[rgba(2,126,251,1)] rounded-md text-white hover:opacity-70 max-md:gap-1"
                                                >
                                                    <span>
                                                        <BsCartPlus />
                                                    </span>
                                                    <span>
                                                        Thêm vào giỏ{" "}
                                                        <span className="max-md:hidden">
                                                            hàng
                                                        </span>
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlerPayNow(
                                                            productDetail
                                                                ?.product?._id,
                                                            quantity,
                                                        )
                                                    }
                                                    className="py-2 px-4 bg-red-500 font-semibold rounded-md text-white bg-gradient-to-r from-[rgba(255,27,0,1)] to-[rgba(251,85,2,1)] hover:opacity-70"
                                                >
                                                    Mua Ngay
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 max-md:px-3">
                            <div>
                                <div className="grid grid-cols-4 gap-4 max-md:block">
                                    <div className="shadow col-span-3 ">
                                        <div className="p-4 bg-[#EAEAF3]">
                                            <h2 className="text-lg uppercase font-semibold">
                                                Mô tả sản phẩm
                                            </h2>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <div className="content-product-detail p-4">
                                                <div className="product-description">
                                                    <h2 className="text-xl">
                                                        Thông tin sản phẩm
                                                    </h2>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: productDetail
                                                                ?.product
                                                                ?.description,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>QC</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
