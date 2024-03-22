import { useRouter } from "@/node_modules/next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { formatterPrice } from "@/app/store/utils/FormatPrice";
import { useContext } from "react";
import CartContext from "@/app/store/contexts/cartContext";
const ProductItem = ({ product }) => {
    const router = useRouter();
    const { addCart } = useContext(CartContext);

    const handlerAddCart = (productId, quantity) => {
        addCart(productId, quantity);
    };
    const handlerPayNow = (productId, quantity) => {
        addCart(productId, quantity);
        router.push("/checkout");
    };
    return (
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
                        <p className="text-color-old-price text-sm line-through">
                            {formatterPrice.format(product?.oldPrice)}
                        </p>
                        <p className="text-orange-500 font-semibold">
                            {formatterPrice.format(product?.price)}
                        </p>
                    </div>
                    <div>
                        <div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() =>
                                        handlerAddCart(product._id, 1)
                                    }
                                    className="p-2 bg-green-100 text-green-500 rounded-full hover:scale-110 duration-300"
                                >
                                    <BsCartPlus />
                                </button>
                                <button
                                    onClick={() =>
                                        handlerPayNow(product._id, 1)
                                    }
                                    className="px-2 py-1 text-sm bg-orange-500 text-white rounded-full hover:scale-110 duration-300"
                                >
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
