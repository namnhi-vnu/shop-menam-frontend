"use client";
import Layout from "../layouts/Layout";
import NavbarLeftAccount from "../components/Header/NavbarLeftAccount";
import AuthLogin from "../store/middleware/LoginAuth";

const page = () => {
    AuthLogin();
    return (
        <Layout type="main">
            <div className="bg-[#F5F5F5]">
                <div className="container mx-auto py-14">
                    <div>
                        <div className="flex items-start gap-8">
                            <div>
                                <NavbarLeftAccount />
                            </div>
                            <div className="flex-1 shadow p-4">
                                <div>
                                    <div>
                                        <div>
                                            {/* tab */}
                                            <div>
                                                <ul>
                                                    <li>Tất cả</li>
                                                </ul>
                                            </div>
                                        </div>
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
