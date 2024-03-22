import Image from "next/image";
import Link from "next/link";
import Layout from "./layouts/Layout";

const Notfound = () => {
    return (
        <Layout type="main">
            <div className="container mx-auto">
                <div className="py-16 text-center flex items-center justify-center">
                    <div>
                        <div>
                            <Image
                                src="/404.png"
                                width={500}
                                height={500}
                                alt=""
                            />
                        </div>
                        <div>
                            <p className="text-lg">
                                Trang bạn tìm không tồn tại
                            </p>
                        </div>
                        <div className="pt-8">
                            <Link
                                href="/"
                                className="bg-orange-500 rounded-md inline-block py-2 px-4 text-white"
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

export default Notfound;
