"use client";
import Link from "next/link";
import Layout from "@/app/layouts/Layout";
import { CiFilter } from "react-icons/ci";
import { useContext, useEffect } from "react";
import ProductContext from "@/app/store/contexts/prdContext";
import ProductItem from "@/app/components/pages/Home/ProductItem";
import Loading from "@/app/components/Loading";
import ProductLoading from "@/app/components/ProductLoading";

const page = ({ params }) => {
    const { state, getProductsByCategory } = useContext(ProductContext);
    const { slug } = params;
    const { isLoading, productbyCategory, menuCategory } = state;

    useEffect(() => {
        getProductsByCategory(slug);
    }, []);

    return (
        <Layout type="main">
            <div>
                <div className="container mx-auto">
                    <div className="py-8 max-md:px-3">
                        <div className="grid grid-cols-4 gap-4 py-8 max-md:block ">
                            <div className="shadow p-2 rounded-md h-max ">
                                <div className="max-md:hidden">
                                    <div>
                                        <div>
                                            <h2 className="uppercase text-orange-500 font-semibold">
                                                Khoảng giá
                                            </h2>
                                        </div>
                                        <div className="">
                                            <form
                                                action=""
                                                className="flex gap-3 py-4"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="đ TỪ"
                                                    className="outline-none p-1 border border-gray-200 w-full"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="đ ĐẾN"
                                                    className="outline-none p-1 border border-gray-200 w-full"
                                                />
                                                <button className="bg-orange-500 px-2 text-white font-semibold rounded-md">
                                                    <CiFilter />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="uppercase text-orange-500 font-semibold">
                                            Danh mục sản phẩm
                                        </h2>
                                        <div className="py-4">
                                            <ul>
                                                {menuCategory?.getAllCategory?.map(
                                                    (cate) => (
                                                        <li
                                                            className="pb-2"
                                                            key={cate._id}
                                                        >
                                                            <Link
                                                                href={cate.slug}
                                                                className="hover:text-orange-500 hover:bg-orange-50 p-1 block"
                                                            >
                                                                {cate.title}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* mobile */}
                                <div></div>
                            </div>
                            <div className="col-span-3 max-md:pt-8">
                                <div>
                                    {/* <div className="">Yến Sào</div> */}

                                    {isLoading ? (
                                        <ProductLoading />
                                    ) : (
                                        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-3">
                                            {productbyCategory?.product?.map(
                                                (product) => (
                                                    <ProductItem
                                                        key={product._id}
                                                        product={product}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    )}
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
