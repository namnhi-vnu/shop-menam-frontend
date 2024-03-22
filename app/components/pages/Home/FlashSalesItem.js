import { formatterPrice } from "@/app/store/utils/FormatPrice";
import Image from "next/image";
import Link from "next/link";
const FlashSalesItem = ({ product }) => {
    return (
        <div>
            <div className="shadow rounded-md border border-gray-200 p-2 group overflow-hidden ">
                <div>
                    <div className=" w-full h-[208px]  flex overflow-hidden">
                        <Link href={`/product/${product?.slug}`}>
                            <Image
                                src={product?.image[0]?.url}
                                width={1000}
                                height={1000}
                                alt=""
                                className="group-hover:scale-125 duration-300 rounded-md object-cover w-full h-full"
                            />
                        </Link>
                    </div>
                    <div>
                        <h2
                            className="font-semibold py-2 min-h-16"
                            title={product?.title}
                        >
                            <Link href={`/product/${product?.slug}`}>
                                {product?.title}
                            </Link>
                        </h2>
                        <div className="flex justify-between py-2">
                            <p className="text-color-old-price line-through">
                                {formatterPrice.format(product?.oldPrice)}
                            </p>
                            <p className="text-orange-500 font-semibold">
                                {formatterPrice.format(product?.price)}
                            </p>
                        </div>
                        <div>
                            <div>
                                <div className=" bg-gradient-to-r from-orange-100 to-pink-100 h-4 flex items-center justify-center text-center rounded-xl relative before:absolute before:content-[''] before:w-4/5 before:bg-gradient-to-r before:from-orange-600 before:to-pink-500 before:h-full before:left-0 before:z-10 before:rounded-xl">
                                    <span className="uppercase text-xs text-white relative z-20 max-md:text-[10px]">
                                        Đang bán chạy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSalesItem;
