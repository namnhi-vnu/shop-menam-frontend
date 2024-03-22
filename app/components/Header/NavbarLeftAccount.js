"use client";
import AuthContext from "@/app/store/contexts/authContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CiEdit, CiGift, CiUser } from "react-icons/ci";
import { IoLocationOutline, IoLogOutOutline } from "react-icons/io5";

import { LuTicket } from "react-icons/lu";
import { PiPasswordLight } from "react-icons/pi";
const NavbarLeftAccount = () => {
    const router = usePathname();
    const { state, handlerLogout } = useContext(AuthContext);
    const {
        formEditAccount: { avatar, firstname },
    } = state;
    const handlerSupmitLogout = () => {
        handlerLogout(["MeNamUserToken", "MeNamUser"]);
    };
    return (
        <div className="min-w-[290px] h-[527px] max-md:h-auto shadow rounded-md ">
            <div className="">
                <div className="">
                    <div className="">
                        <div>
                            <div>
                                <div className="">
                                    {/*nav left */}
                                    <div className="">
                                        <div className="p-4 max-md:pb-2 ">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center justify-start gap-3 pb-3 max-md:pb-2 border-b border-b-gray-200">
                                                    <p>
                                                        <Image
                                                            src={`${avatar || "/image-default.png"} `}
                                                            width={50}
                                                            height={50}
                                                            alt=""
                                                            className="border border-gray-100 w-[50px] h-[50px] rounded-full object-cover"
                                                        />
                                                    </p>
                                                    <div>
                                                        <h2 className="font-semibold pb-1">
                                                            {firstname}
                                                        </h2>
                                                        <Link
                                                            href="/account/profile"
                                                            className="flex items-center gap-2 text-gray-500 "
                                                        >
                                                            <span>
                                                                <CiEdit />
                                                            </span>
                                                            <span>
                                                                Sửa thông tin
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="max-md:block lg:hidden">
                                                    <button
                                                        onClick={
                                                            handlerSupmitLogout
                                                        }
                                                        className="flex items-center gap-2 bg-orange-500 text-white py-1 px-2 rounded-full"
                                                    >
                                                        <span>
                                                            <IoLogOutOutline />
                                                        </span>
                                                        <span>Đăng xuất</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-8 text-base max-md:py-4 max-md:px-2 ">
                                            <div>
                                                <ul className="max-md:grid max-md:grid-cols-3 max-md:gap-3 max-md:text-center">
                                                    <li className=" ">
                                                        <Link
                                                            href="/account/profile"
                                                            className={`${
                                                                router.includes(
                                                                    "/profile",
                                                                )
                                                                    ? "bg-color-origin text-orange-600"
                                                                    : ""
                                                            } flex items-center group gap-3 p-2 px-4 hover:bg-color-origin duration-300 rounded-ms max-md:flex-col max-md:gap-1 max-md:rounded-md`}
                                                        >
                                                            <span className="text-xl  group-hover:text-orange-600">
                                                                <CiUser />
                                                            </span>
                                                            <span className="group-hover:text-orange-600 max-md:text-sm">
                                                                Tài khoản{" "}
                                                                <span className="max-md:hidden">
                                                                    của tôi
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link
                                                            href="/account/orders"
                                                            className={`${
                                                                router.includes(
                                                                    "/orders",
                                                                )
                                                                    ? "bg-color-origin text-orange-600"
                                                                    : ""
                                                            } flex items-center group gap-3 p-2 px-4 hover:bg-color-origin duration-300 rounded-ms max-md:flex-col max-md:gap-1 max-md:rounded-md`}
                                                        >
                                                            <span className="text-xl group-hover:text-orange-600">
                                                                <CiGift />
                                                            </span>
                                                            <span className="group-hover:text-orange-600 max-md:text-sm">
                                                                Đơn mua
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link
                                                            href="/account/addresses"
                                                            className={`${
                                                                router.includes(
                                                                    "/addresses",
                                                                )
                                                                    ? "bg-color-origin text-orange-600"
                                                                    : ""
                                                            } flex items-center group gap-3 p-2 px-4 hover:bg-color-origin duration-300 rounded-ms max-md:flex-col max-md:gap-1 max-md:rounded-md`}
                                                        >
                                                            <span className="text-xl group-hover:text-orange-600">
                                                                <IoLocationOutline />
                                                            </span>
                                                            <span className="group-hover:text-orange-600 max-md:text-sm">
                                                                Địa chỉ
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="max-md:w-[127px]">
                                                        <Link
                                                            href="#"
                                                            className={`${
                                                                router.includes(
                                                                    "/password",
                                                                )
                                                                    ? "bg-color-origin text-orange-600"
                                                                    : ""
                                                            } flex items-center group gap-3 p-2 px-4 hover:bg-color-origin duration-300 rounded-ms max-md:flex-col max-md:gap-1 max-md:rounded-md`}
                                                        >
                                                            <span className="text-xl group-hover:text-orange-600">
                                                                <PiPasswordLight />
                                                            </span>
                                                            <span className="group-hover:text-orange-600 max-md:text-sm">
                                                                Đổi mật khẩu
                                                            </span>
                                                        </Link>
                                                    </li>
                                                    <li className="">
                                                        <Link
                                                            href="/account/voucher"
                                                            className={`${
                                                                router.includes(
                                                                    "/voucher",
                                                                )
                                                                    ? "bg-color-origin text-orange-600"
                                                                    : ""
                                                            } flex items-center group gap-3 p-2 px-4 hover:bg-color-origin duration-300 rounded-ms max-md:flex-col max-md:gap-1 max-md:rounded-md`}
                                                        >
                                                            <span className="text-xl group-hover:text-orange-600">
                                                                <LuTicket />
                                                            </span>
                                                            <span className="group-hover:text-orange-600 max-md:text-sm">
                                                                Kho voucher
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* content right */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarLeftAccount;
