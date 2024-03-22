import { formatterPrice } from "@/app/store/utils/FormatPrice";
import Image from "next/image";
import Link from "next/link";
const ProductItemCart = ({ product }) => {
    return (
        <div>
            <div>
                <div>
                    <div className="flex items-start gap-3 cursor-pointer">
                        <div className="max-w-[60px]">
                            <Link
                                href={`/product/${product?.slug || product?.product?.slug}`}
                            >
                                <Image
                                    src={product?.image[0]?.url}
                                    width={60}
                                    height={60}
                                    alt={
                                        product?.title ||
                                        product?.product?.title
                                    }
                                    className="rounded-md"
                                />
                            </Link>
                        </div>
                        <div className="flex-1 ">
                            <Link
                                href={`/product/${product?.slug || product?.product?.slug}`}
                            >
                                <p className="text-base">
                                    {product?.title || product?.product?.title}
                                </p>
                            </Link>
                        </div>
                        <div className="max-w-[80px]">
                            <p className="text-sm pt-[3px] text-red-500">
                                {formatterPrice.format(product?.price)}
                            </p>
                            <p className="text-xs text-gray-700 pt-1">
                                x {product?.count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemCart;
