import Link from "next/link";
import { PiPlusBold } from "react-icons/pi";
import AdminAccountItem from "./AdminAccountItem";

const page = () => {
    const urlAccount = "/admin/Dashboard/orders";
    return (
        <div>
            <div>
                <div className="sticky top-0 z-50 bg-[#24303F]">
                    <div className="p-4 flex items-center justify-between">
                        <h2 className="uppercase text-xl font-semibold">
                            Quản Tài khoản
                        </h2>
                        <div>
                            <Link
                                href={`${urlAccount}/new-account`}
                                className="flex items-center gap-2 font-semibold bg-teal-500 text-teal-900 py-2 px-3 rounded-full hover:opacity-70"
                            >
                                <span>
                                    <PiPlusBold />
                                </span>
                                <span>Tạo tài khoản</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-8 ">
                    <div className=" rounded-md bg-[#24303F] ">
                        <div className="border-b border-gray-600 p-4 pb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-[10%]">
                                    <span>STT</span>
                                </div>
                                <div className="w-[20%]">
                                    <span>Họ tên</span>
                                </div>
                                <div className="w-[20%]">
                                    <span>Tài khoản</span>
                                </div>
                                <div className="w-[20%]">
                                    <span>Online</span>
                                </div>
                                <div className="w-[20%]">
                                    <span>Trạng thái</span>
                                </div>
                                <div className="w-[10%]">
                                    <span>Quyền</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <AdminAccountItem />
                                <AdminAccountItem />
                                <AdminAccountItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
