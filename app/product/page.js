"use client";
import React, { useContext } from "react";
import Layout from "../layouts/Layout";
import ProductContext from "../store/contexts/prdContext";
import ProductItem from "../components/pages/Home/ProductItem";
import ProductLoading from "../components/ProductLoading";

const page = () => {
    const { state, dispatch } = useContext(ProductContext);
    const { allProducts } = state;
    console.log(allProducts);
    return (
        <Layout type="main">
            <div className="py-8">
                <div className="container mx-auto">
                    <div className="text-xl pb-4 px-3">
                        <h2 className="uppercase text-orange-500">Sản phẩm</h2>
                    </div>
                    <div className="max-md:px-3">
                        <div>
                            <div></div>
                            <div>
                                {allProducts.length === 0 ? (
                                    <ProductLoading />
                                ) : (
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
