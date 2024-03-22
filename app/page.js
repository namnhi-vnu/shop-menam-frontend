"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import HomePage from "./components/pages/Home/HomePage";
import Layout from "./layouts/Layout";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "./components/pages/Home/ProductItem";

import { LuUtensilsCrossed } from "react-icons/lu";
import { useContext } from "react";
import ProductContext from "./store/contexts/prdContext";

export default function Home() {
    const { state, dispatch } = useContext(ProductContext);
    const { allProducts } = state;
    // console.log(allProducts);
    // allProducts?.allProducts?.map((item) => console.log(item.image[0]?.url));
    return (
        <div>
            <Layout type="main">
                <div className="max-md:px-3 ">
                    <div className="container mx-auto">
                        <div>
                            <HomePage />
                        </div>
                        <div className="py-4 pb-8">
                            <div>
                                <div className="">
                                    <h2 className="uppercase text-orange-600 text-xl font-semibold">
                                        Sản Phẩm Nổi Bật
                                    </h2>
                                </div>
                                <div className="py-4">
                                    <div>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={16}
                                            navigation={{
                                                clickable: true,
                                            }}
                                            autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                            }}
                                            loop={true}
                                            breakpoints={{
                                                "@0.00": {
                                                    slidesPerView: 2,
                                                    spaceBetween: 10,
                                                },
                                                "@0.75": {
                                                    slidesPerView: 3,
                                                    spaceBetween: 16,
                                                },
                                                "@1.00": {
                                                    slidesPerView: 3,
                                                    spaceBetween: 16,
                                                },
                                                "@1.50": {
                                                    slidesPerView: 5,
                                                    spaceBetween: 16,
                                                },
                                            }}
                                            modules={[Autoplay, Navigation]}
                                            className="mySwiper"
                                        >
                                            {/* <ProductItem /> */}
                                            {allProducts?.allProducts?.map(
                                                (product) => (
                                                    <SwiperSlide
                                                        key={product._id}
                                                    >
                                                        <ProductItem
                                                            product={product}
                                                        />
                                                    </SwiperSlide>
                                                ),
                                            )}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 max-md:p-0">
                            <div>
                                <Image
                                    src="/bannerhome-2.jpg"
                                    width={1330}
                                    height={250}
                                    alt=""
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                        {/* set combo */}
                        <div className="pt-8 pb-4">
                            <div>
                                <div>
                                    <h2 className="uppercase text-orange-600 text-xl font-semibold">
                                        Sét quà cao cấp
                                    </h2>
                                </div>
                                <div className="py-4">
                                    <div className="grid grid-cols-5 gap-4 max-md:grid-cols-2 max-md:gap-3">
                                        {allProducts?.allProducts?.map(
                                            (product) => (
                                                <ProductItem
                                                    key={product._id}
                                                    product={product}
                                                />
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end set combo */}
                        <div>
                            <div className="pt-8 pb-4">
                                <div>
                                    <h2 className="uppercase text-orange-600 text-xl font-semibold flex items-center gap-2">
                                        Tổ yến tinh chế
                                    </h2>
                                </div>
                            </div>
                            <div className="p2-4">
                                <div className="grid grid-cols-5 gap-4 max-md:grid-cols-2 max-md:gap-3">
                                    {allProducts?.allProducts?.map(
                                        (product) => (
                                            <ProductItem
                                                key={product._id}
                                                product={product}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="py-4">
                                <div>
                                    <h2 className="uppercase text-orange-600 text-xl font-semibold flex items-center gap-2">
                                        <span>
                                            <LuUtensilsCrossed />
                                        </span>
                                        <span> Đồ gia dụng</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
