import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import Layout from "@/app/layouts/Layout";

const page = () => {
    return (
        <Layout type="checkout">
            <div className="min-h-screen bg-[#E4F5FF] py-8 flex items-start justify-center max-md:px-3">
                <div className="w-[600px] mx-auto shadow p-4 rounded-lg">
                    <div>
                        <div className="text-center">
                            <p className="text-5xl text-green-600 flex items-center justify-center pb-4">
                                <BsCartCheck />
                            </p>
                            <h2 className="text-2xl text-orange-600 font-semibold py-1">
                                Đặt hàng thành công
                            </h2>
                            <p className="max-w-[263px] mx-auto md:max-w-[488px] text-lg">
                                Cảm ơn quý khách đã mua hàng tại Shop Mẹ Nấm.
                                Chúng tôi liên hệ với quý khách trong thời gian
                                sớm nhất.
                            </p>
                        </div>
                        <div className="text-center py-4">
                            <Link
                                href="/"
                                className="bg-orange-500 text-white py-2 px-4 rounded-md inline-block"
                            >
                                Quay về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
