import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[url('/background-header.webp')] bg-no-repeat bg-[length:100%_100%] max-md:px-3">
            <div>
                <div className="container mx-auto">
                    <div className="py-8">
                        <div>
                            <h2 className="uppercase text-orange-600 text-xl font-semibold py-4">
                                Shop mẹ nấm
                            </h2>
                            <div className="grid grid-cols-5 gap-4 max-md:grid-cols-2 max-md:gap-3">
                                <div className="col-span-2">
                                    <div>
                                        <div>
                                            <h2 className="uppercase text-base pb-2 font-semibold">
                                                Địa Chỉ
                                            </h2>
                                        </div>
                                        <ul className="flex flex-col gap-3">
                                            <li className="flex items-center gap-2">
                                                <span>
                                                    <CiLocationOn />
                                                </span>
                                                <span>
                                                    Xã Văn Phú - Nho Quan - Ninh
                                                    Bình
                                                </span>
                                            </li>
                                            <li>
                                                <Link
                                                    href="tel:0963223710"
                                                    className="flex items-center gap-2"
                                                >
                                                    <span>
                                                        <PiPhoneLight />
                                                    </span>
                                                    <span>0963.223.710</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="max-md:pt-4">
                                        <h2 className="uppercase text-base pb-2 font-semibold">
                                            Hỗ trợ khách hàng
                                        </h2>
                                    </div>
                                    <ul>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Các câu hỏi thường gặp
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Hướng dẫn đặt hàng
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Phương thức thanh toán
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Phương thức vận chuyển
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Chính sách đổi trả
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="max-md:pt-4">
                                    <div>
                                        <h2 className="uppercase text-base pb-2 font-semibold">
                                            Danh mục sản phẩm
                                        </h2>
                                    </div>
                                    <ul>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Yến Chưng
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Yến Sào
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Tổ Yến
                                            </Link>
                                        </li>
                                        <li className="pb-2">
                                            <Link
                                                href="#"
                                                className="hover:text-orange-500"
                                            >
                                                Sét Quà Tặng
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div>
                                        <h2 className="uppercase text-base pb-2 font-semibold">
                                            Kết Nối
                                        </h2>
                                        <ul className="flex items-center gap-3 text-2xl">
                                            <li className="text-[#0866FF]">
                                                <Link href="">
                                                    <span>
                                                        <FaFacebook />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="text-[#0866FF]">
                                                <Link href="">
                                                    <span>
                                                        <FaFacebookMessenger />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coppyright py-3 border-t border-gray-400">
                        <p className="max-md:text-sm max-md:pb-16">
                            © Copyright 2024 Shop Mẹ Nấm: thiết kế bởi{" "}
                            <Link
                                href="https://www.ntechs.vn/"
                                className="text-orange-600"
                                target="_blank"
                            >
                                NTechs
                            </Link>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
