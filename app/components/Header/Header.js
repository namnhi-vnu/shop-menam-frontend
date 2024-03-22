"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { K2D } from "next/font/google";
import { usePathname } from "@/node_modules/next/navigation";

import { PiShoppingCartThin } from "react-icons/pi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { CiUser, CiGift, CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

import Topbar from "./Topbar";
import CartView from "../cart/CartView";

import AuthContext from "@/app/store/contexts/authContext";
import CartContext from "@/app/store/contexts/cartContext";
import ProductContext from "@/app/store/contexts/prdContext";
const inter = K2D({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { state, handlerLogout } = useContext(AuthContext);
    const {
        formEditAccount: { avatar },
    } = state;
    const { state: cart } = useContext(CartContext);
    const { state: menuCategory } = useContext(ProductContext);
    const { user: user } = state;
    const router = usePathname();

    const handlerShowMenu = () => {
        setShowMenu(!showMenu);
        const body = document.querySelector("body");
        body.classList.add("overflow-y-hidden");
    };
    const closeMenu = () => {
        setShowMenu(!showMenu);
        const body = document.querySelector("body");
        body.classList.remove("overflow-y-hidden");
    };
    const handlerSupmitLogout = () => {
        handlerLogout(["MeNamUserToken", "MeNamUser"]);
    };
    useEffect(() => {
        const body = document.querySelector("body");
        body.classList.remove("overflow-y-hidden");
    }, [router]);

    return (
        <>
            <div className="h-12 bg-[url('/bannertop.webp')]  bg-no-repeat bg-cover max-md:hidden"></div>
            <div className=" bg-[url('/background-header.webp')] bg-no-repeat bg-[length:100%_100%] shadow">
                <div className="max-lg:hidden">
                    <Topbar />
                </div>
                <div className="container mx-auto">
                    <div className="pt-2 max-md:py-1">
                        <div className="flex items-center  max-md:justify-between max-lg:py-2 max-lg:gap-14 max-md:gap-2 max-md:px-4  ">
                            {/* search mobile */}
                            <div className="max-md:block max-lg:hidden lg:hidden">
                                <p className="text-2xl">
                                    <CiSearch />
                                </p>
                            </div>
                            {/* end search mobile */}
                            {/* Logo */}
                            <div className="logo min-w-[150px] max-md:min-w-auto pb-3 max-lg:pb-0 max-md:pb-0 text-center">
                                <h1>
                                    <Link
                                        href="/"
                                        className="text-orange-500 font-semibold text-lg"
                                    >
                                        Shop Mẹ Nấm
                                    </Link>
                                </h1>
                            </div>
                            {/* end Logo */}
                            {/* Menu Main */}
                            <nav className="menu-main flex-1 max-lg:hidden ">
                                <div className={inter.className}>
                                    <ul className="text-[1.1em] text-black font-medium flex items-center justify-start gap-12">
                                        <li
                                            className={`hover:text-orange-600 border-b-2  pb-3 hover:border-b-2 hover:border-orange-600  duration-300 ${router === "/" ? "text-orange-600 border-b-2 border-orange-600" : "border-transparent"}`}
                                        >
                                            <Link href="/">Trang chủ</Link>
                                        </li>
                                        {menuCategory?.menuCategory?.getAllCategory?.map(
                                            (cateItem, index) => {
                                                if (index < 5) {
                                                    return (
                                                        <li
                                                            key={cateItem._id}
                                                            className={`hover:text-orange-600 border-b-2 pb-3 hover:border-b-2 hover:border-orange-600  duration-300 ${router.includes(`/category/${cateItem.slug}`) ? "text-orange-600 border-orange-600" : "border-transparent "}`}
                                                        >
                                                            <Link
                                                                href={`/category/${cateItem.slug}`}
                                                            >
                                                                {cateItem.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            },
                                        )}
                                    </ul>
                                </div>
                            </nav>
                            {/* End  Menu Main */}
                            {/* Account Main */}
                            <div className="account min-w-[200px] max-lg:hidden">
                                <div>
                                    <ul className="relative text-[1.3em] flex items-center justify-end gap-3">
                                        <li className="px-3 relative pb-3 group ">
                                            <Link
                                                href="/cart"
                                                className="relative"
                                            >
                                                <PiShoppingCartThin />
                                                {cart?.cart?.cart?.products
                                                    ?.length > 0 ||
                                                cart?.cart?.products?.length >
                                                    0 ? (
                                                    <span className="absolute -top-3 -right-3 text-xs text-white flex items-center justify-center bg-orange-500 w-5 h-5 rounded-full">
                                                        {cart?.cart?.cart
                                                            ?.products
                                                            ?.length ||
                                                            cart?.cart?.products
                                                                ?.length}
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </Link>
                                            <div className="hidden group-hover:block">
                                                <CartView />
                                            </div>
                                        </li>
                                        <li className="px-3 pb-3 relative group">
                                            <Link
                                                href={`${user === null ? "/account/login" : "/account/profile"}`}
                                                className="flex items-center gap-2"
                                            >
                                                {user === null ? (
                                                    <CiUser />
                                                ) : (
                                                    <Image
                                                        src={`${avatar || "/image-default.png"}`}
                                                        width={30}
                                                        height={30}
                                                        alt=""
                                                        className="border w-[30px] h-[30px] border-gray-100 rounded-full object-cover"
                                                    />
                                                )}
                                                {user !== null ? (
                                                    <p className="text-sm font-extrabold">
                                                        {user?.user?.firstname +
                                                            user?.user
                                                                ?.lastname}
                                                    </p>
                                                ) : (
                                                    <p className="text-sm">
                                                        Đăng nhập
                                                    </p>
                                                )}
                                            </Link>
                                            {user !== null && (
                                                <div className="absolute z-50 hidden group-hover:block bg-white w-[200px] shadow-lg rounded-lg border top-full -left-[50px]">
                                                    <div className="relative">
                                                        <div className="absolute -top-[11px] right-[40%] w-0 h-0 border-solid border-t-0 border-r-[11px] border-b-[11px] border-l-[11px] border-t-transparent border-r-transparent border-b-slate-100 border-l-transparent"></div>
                                                        <ul className="flex flex-col gap-1 py-2">
                                                            <li className="text-base ">
                                                                <Link
                                                                    href="/account/profile"
                                                                    className="flex items-center gap-2 hover:text-orange-500 duration-300 py-2 px-2 hover:bg-orange-50"
                                                                >
                                                                    <span>
                                                                        <CiUser />
                                                                    </span>
                                                                    <span>
                                                                        Tài
                                                                        khoản
                                                                        của tôi
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li className="text-base">
                                                                <Link
                                                                    href="/account/orders"
                                                                    className="flex items-center gap-2 hover:text-orange-500 duration-300 py-2 px-2 hover:bg-orange-50"
                                                                >
                                                                    <span>
                                                                        <CiGift />
                                                                    </span>
                                                                    <span>
                                                                        {" "}
                                                                        Đơn mua
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                            <li
                                                                onClick={
                                                                    handlerSupmitLogout
                                                                }
                                                                className="text-base cursor-pointer flex items-center gap-2 hover:text-orange-500 duration-300 px-2 py-2 hover:bg-orange-50"
                                                            >
                                                                <span>
                                                                    <IoLogOutOutline />
                                                                </span>
                                                                <span>
                                                                    Đăng xuất
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Account Main */}
                            {/* mobile tablet */}
                            <div className="lg:hidden max-lg:block flex-1 max-md:hidden">
                                <div className="search flex-auto relative">
                                    <div className=" text-sm">
                                        <input
                                            placeholder="Tìm kiếm..."
                                            type="text"
                                            className="p-2 bg-[#FEFAF2] w-full outline-none rounded-lg border border-transparent focus:border-orange-500 hover:border-orange-500"
                                        />
                                        <button className="absolute text-white font-bold px-4 py-[7px] border text-xl rounded-lg bg-orange-500 top-1/2 right-[1px] -translate-y-1/2">
                                            <CiSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Cart end bar mobile  */}
                            <div className="lg:hidden max-lg:hidden max-md:block">
                                <div className="flex items-center ">
                                    {/* cart mobile */}
                                    <ul className="pr-4">
                                        <li className=" group ">
                                            <Link
                                                href="/cart"
                                                className="relative px-2 block"
                                            >
                                                <span className="text-xl">
                                                    <PiShoppingCartThin />
                                                </span>
                                                {cart?.cart?.cart?.products
                                                    ?.length > 0 ||
                                                cart?.cart?.products?.length >
                                                    0 ? (
                                                    <span className="absolute -top-3 -right-3 text-xs max-md:-top-2 max-md:-right-1 max-md:text-[10px] text-white flex items-center justify-center bg-orange-500 w-5 h-5 rounded-full max-md:w-4 max-md:h-4">
                                                        {cart?.cart?.cart
                                                            ?.products
                                                            ?.length ||
                                                            cart?.cart?.products
                                                                ?.length}
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </Link>
                                            <div className="hidden group-hover:block"></div>
                                        </li>
                                    </ul>
                                    <p
                                        onClick={handlerShowMenu}
                                        className="text-3xl cursor-pointer text-orange-600"
                                    >
                                        <HiMiniBars3BottomRight />
                                    </p>
                                </div>
                            </div>
                            {/* end Cart end bar mobile  */}
                        </div>
                        {/* Menu mobile */}
                        <div
                            className={`menushowmb absolute bg-white w-full h-screen z-50 top-0  pt-8 lg:hidden  ${showMenu ? "acitve" : "-left-full"} `}
                        >
                            <div className=" relative ">
                                <p
                                    onClick={closeMenu}
                                    className="w-8 h-8 cursor-pointer border border-orange-500 flex items-center justify-center text-orange-500 rounded-full absolute right-3 top-0"
                                >
                                    <IoMdClose />
                                </p>
                            </div>
                            <div className="pt-8">
                                <div className={inter.className}>
                                    <ul className="text-[1.1em] text-black font-medium flex flex-col items-center justify-start gap-4">
                                        <li
                                            className={`hover:text-orange-600 border-b-2  pb-3 hover:border-b-2 hover:border-orange-600  duration-300 ${router === "/" ? "text-orange-600 border-b-2 border-orange-600" : "border-transparent"}`}
                                        >
                                            <Link href="/">Trang chủ</Link>
                                        </li>
                                        {menuCategory?.menuCategory?.getAllCategory?.map(
                                            (cateItem, index) => {
                                                if (index < 5) {
                                                    return (
                                                        <li
                                                            key={cateItem._id}
                                                            className={`hover:text-orange-600 border-b-2 pb-3 hover:border-b-2 hover:border-orange-600  duration-300 ${router.includes(`/${cateItem.slug}`) ? "text-orange-600 border-orange-600" : "border-transparent "}`}
                                                        >
                                                            <Link
                                                                href={`/category/${cateItem.slug}`}
                                                            >
                                                                {cateItem.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            },
                                        )}
                                    </ul>
                                    <div className="border-t border-gray-300 pt-8">
                                        <ul className="flex flex-col items-center justify-start">
                                            <li className="px-3 pb-3">
                                                <Link
                                                    href={`${user === null ? "/account/login" : "/account/profile"}`}
                                                    className="flex items-center gap-2"
                                                >
                                                    <CiUser />

                                                    {user !== null ? (
                                                        <p className="text-sm font-extrabold">
                                                            {user?.user
                                                                ?.firstname +
                                                                user?.user
                                                                    ?.lastname}
                                                        </p>
                                                    ) : (
                                                        <p className="text-sm">
                                                            Đăng nhập
                                                        </p>
                                                    )}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Menu mobile */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
