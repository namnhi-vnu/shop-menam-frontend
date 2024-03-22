import Image from "next/image";
import Link from "next/link";
import { CiTrash } from "react-icons/ci";
import { BiMessageSquareEdit } from "react-icons/bi";
import { formatterPrice } from "@/app/store/utils/FormatPrice";
const AdminProductItem = ({ product, index, handlerDeleteProduct }) => {
    console.log(product);
    return (
        <div className="py-4 border-b border-gray-600">
            <div className="flex items-center gap-2">
                <div className="w-[5%]">
                    <span>{index + 1}</span>
                </div>
                <div className="w-[10%]">
                    <span>
                        <Image
                            src={product?.image[0]?.url}
                            width={100}
                            height={100}
                            alt=""
                            className="rounded-md w-auto h-auto"
                        />
                    </span>
                </div>
                <div className="w-3/6">
                    <h2>{product?.title}</h2>
                </div>
                <div className="w-[15%]">
                    <span className="inline-block text-sm py-1 px-3 text-teal-800  bg-teal-300 rounded-full">
                        {product?.category}
                    </span>
                </div>
                <div className="w-[15%] flex flex-col gap-1 items-start">
                    <span className="text-sm line-through">1.250,000 đ</span>
                    <span className="text-red-500 text-lg">
                        {formatterPrice.format(product?.price)}
                    </span>
                </div>
                <div className="w-[5%] flex items-center gap-2">
                    <Link
                        href="/admin/Dashboard/product/update-product/123456"
                        className=" bg-green-300 text-green-900 p-2 rounded-full hover:scale-105"
                    >
                        <BiMessageSquareEdit />
                    </Link>
                    <button
                        onClick={(id) => handlerDeleteProduct(product?._id)}
                        className="text-red-500 p-2 bg-red-100 rounded-full hover:scale-105"
                    >
                        <CiTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminProductItem;
