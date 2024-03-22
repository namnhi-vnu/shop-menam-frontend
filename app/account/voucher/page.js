import Image from "next/image";
import Layout from "@/app/layouts/Layout";
import BannerTopPage from "../pages/BannerTopPage";
import NavbarLeftAccount from "@/app/components/Header/NavbarLeftAccount";

const page = () => {
    return (
        <Layout type="main">
            <div className="max-md:hidden">
                <BannerTopPage title="Kho Voucher" />
            </div>
            <div>
                <div className="container mx-auto py-7 ">
                    <div>
                        <div className="flex items-start gap-8 max-md:block">
                            <div>
                                <NavbarLeftAccount />
                            </div>
                            <div className="flex-1 ">
                                <div className="shadow">
                                    <div>
                                        <div className="p-5 py-[30px] border-b border-b-gray-200">
                                            {/* tab */}
                                            <div className="">
                                                <ul className="flex items-center justify-between ">
                                                    <li className="text-xl font-semibold">
                                                        Voucher của tôi
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8">
                                    <div className="flex items-center justify-center gap-4">
                                        <Image
                                            src="/voucher.png"
                                            width={100}
                                            height={100}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
