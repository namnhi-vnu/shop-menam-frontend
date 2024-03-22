import { formatterPrice } from "@/app/store/utils/FormatPrice";
import Image from "next/image";

const AdminProductOrderDetailItem = ({ prdItem }) => {
    return (
        <div>
            <div className="flex items-center gap-3 border-b border-dashed border-gray-500 py-2">
                <div>
                    <p title="Số Lượng Sản Phẩm">SL: {prdItem?.count}</p>
                </div>
                <div className="flex-1 flex justify-between">
                    <div className="flex gap-2 ">
                        <Image
                            src={prdItem?.product?.image[0]?.url}
                            width={70}
                            height={70}
                            alt=""
                            className="rounded-md"
                        />
                        <h2>{prdItem?.product?.title}</h2>
                    </div>
                    <p className="text-orange-500">
                        {formatterPrice.format(prdItem?.product?.price)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminProductOrderDetailItem;
