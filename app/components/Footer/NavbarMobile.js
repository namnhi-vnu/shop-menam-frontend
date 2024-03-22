"use client";
import Link from "next/link";
import { usePathname } from "@/node_modules/next/navigation";
import { GoHome } from "react-icons/go";
import { PiStorefront } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoFlashOutline } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from "@/app/store/contexts/authContext";
const NavbarMobile = () => {
    const {
        state: { user },
    } = useContext(AuthContext);
    const router = usePathname();
    return (
        <div className="px-3">
            <ul className="flex items-center justify-around">
                <li
                    className={`${router === "/" ? "text-orange-600" : "text-gray-500"}`}
                >
                    <Link href="/" className="block py-2 text-2xl ">
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <GoHome />
                            </span>
                            <span className="text-xs">Trang chủ</span>
                        </div>
                    </Link>
                </li>
                <li
                    className={`${router === "/flash-sale" ? "text-orange-600" : "text-gray-500"}`}
                >
                    <Link href="/flash-sale" className="block py-2 text-2xl ">
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <IoFlashOutline />
                            </span>
                            <span className="text-xs">Sale</span>
                        </div>
                    </Link>
                </li>
                <li
                    className={`${router === "/product" ? "text-orange-600" : "text-gray-500"}`}
                >
                    <Link href="/product" className="block py-2 text-2xl ">
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <PiStorefront />
                            </span>
                            <span className="text-xs">Cửa hàng</span>
                        </div>
                    </Link>
                </li>
                <li
                    className={`${router.includes("/account/") ? "text-orange-600" : "text-gray-500"}`}
                >
                    <Link
                        href={`${user === null ? "/account/login" : "/account/profile"}`}
                        className="block py-2 text-2xl "
                    >
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <CiUser />
                            </span>
                            <span className="text-xs">tài khoản</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarMobile;
