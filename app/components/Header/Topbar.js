import Link from "next/link";
import { PiPhoneLight } from "react-icons/pi";
import { CiLocationOn, CiSearch } from "react-icons/ci";
const Topbar = () => {
    return (
        <>
            <div className="top-bar py-3">
                <div className="container mx-auto">
                    <div className="flex items-center justify-start gap-8">
                        <ul>
                            <li className="flex items-center gap-3">
                                <span className="">
                                    <PiPhoneLight />
                                </span>
                                <span className="text-sm font-medium">
                                    <Link href="tel:+84963223710">
                                        0963.223.710
                                    </Link>
                                </span>
                            </li>
                        </ul>
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
                        <div className="flex-auto">
                            <div className="flex items-center justify-end gap-10">
                                {/*  
                                    Free ship
                                */}
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">
                                        Miễn phí ship cho đơn 399k
                                    </p>
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                    </span>
                                </div>
                                <ul>
                                    <li className="flex items-center justify-end gap-4 text-sm">
                                        <span className="">
                                            <CiLocationOn />
                                        </span>
                                        <span>
                                            Văn Phú - Nho Quan - Ninh Bình
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
