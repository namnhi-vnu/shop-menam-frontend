"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LuLayoutDashboard, LuUsers } from "react-icons/lu";
import { BiMessageSquareEdit } from "react-icons/bi";
import { CiCoffeeCup, CiGift } from "react-icons/ci";

import { MdOutlineCategory } from "react-icons/md";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
const AdminHeader = () => {
    const router = usePathname();

    return (
        <div className="p-4">
            <div>
                <div className="flex items-start justify-start border-b pb-8 border-gray-600">
                    <Link href="/admin/Dashboard">
                        <Image
                            src="/logo-ntechs.png"
                            width={100}
                            height={100}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="py-4 text-lg">
                    <p className="text-gray-500 flex items-center text-lg gap-2 select-none">
                        <span>
                            <LuLayoutDashboard />
                        </span>
                        <span>Dashboard</span>
                    </p>

                    <div className="pt-6">
                        <ul>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/posts`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <BiMessageSquareEdit />
                                    </span>
                                    <span>Bài viết</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/product`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <CiCoffeeCup />
                                    </span>
                                    <span>Sản phẩm</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/category-products`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <MdOutlineCategory />
                                    </span>
                                    <span>Danh mục sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/orders`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <CiGift />
                                    </span>
                                    <span>Đơn hàng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/orders`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <TfiLayoutSliderAlt />
                                    </span>
                                    <span>Slider</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <Link
                                    href={`/admin/Dashboard/accounts`}
                                    className="flex items-center gap-3 mt-1 hover:bg-[#313D4A] p-2 rounded-md"
                                >
                                    <span className="text-lg">
                                        <LuUsers />
                                    </span>
                                    <span>Tài khoản</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;

[2, 55, 24, 49, 16, 38];
