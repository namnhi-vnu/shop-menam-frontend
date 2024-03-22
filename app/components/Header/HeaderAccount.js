"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const HeaderAccount = () => {
    const pathname = usePathname();

    return (
        <div className="shadow bg-[url('/background-header.webp')] bg-no-repeat bg-[length:100%_100%]">
            <div className="container mx-auto">
                <nav className="p-4">
                    <ul className="flex items-center justify-between">
                        <li>
                            <Link href="/">
                                <p className="text-2xl text-orange-500">
                                    Shop Mẹ Nấm
                                </p>
                            </Link>
                        </li>
                        <li>
                            <p className="text-2xl max-md:text-xl">
                                {pathname.includes("/signup")
                                    ? "Đăng ký"
                                    : "Đăng nhập"}
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderAccount;
