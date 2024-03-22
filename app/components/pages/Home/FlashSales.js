"use client";
import { ImFire } from "react-icons/im";
import FlashSalesItem from "./FlashSalesItem";
import { useContext } from "react";
import ProductContext from "@/app/store/contexts/prdContext";
const FlashSales = () => {
    const { state, dispatch } = useContext(ProductContext);
    const { allProducts } = state;
    return (
        <div className="py-8 ">
            <div>
                <div className="pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-orange-600 flex items-center gap-2">
                            <span className="text-2xl">
                                <ImFire />
                            </span>
                            <span>Flash Sale</span>
                        </h2>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-5 gap-4 max-md:grid-cols-2 max-md:gap-3">
                        {allProducts?.allProducts?.map((product) => (
                            <FlashSalesItem
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSales;
