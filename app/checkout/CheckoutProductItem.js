import Image from "next/image";
import Link from "next/link";
import { formatterPrice } from "../store/utils/FormatPrice";
const CheckoutProductItem = ({ product }) => {
    return (
        <div className="text-green-900">
            <div>
                <div className="pt-4">
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-2">
                            <div className="">
                                <Link
                                    href={`/product/${product.slug || product.product.slug}`}
                                >
                                    <Image
                                        src={`${product.image[0].url}`}
                                        width={80}
                                        height={80}
                                        alt=""
                                        className="rounded-md object-cover inline-block min-w-[80px] w-[80px] h-[80px]"
                                    />
                                </Link>
                            </div>
                            <div>
                                <h2
                                    title={
                                        product.title || product.product.title
                                    }
                                    className="font-semibold pb-1"
                                >
                                    <Link
                                        href={`/product/${product.slug || product.product.slug}`}
                                    >
                                        {product.title || product.product.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Số lượng: {product.count}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="text-sm text-red-500 font-semibold">
                                    {formatterPrice.format(
                                        product.product.price,
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProductItem;
