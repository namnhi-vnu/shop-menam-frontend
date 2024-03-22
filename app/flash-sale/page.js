import React from "react";
import Layout from "../layouts/Layout";

const page = () => {
    return (
        <Layout type="main">
            <div className="py-8">
                <div className="container mx-auto">
                    <div>
                        <div className="text-xl pb-4 px-3">
                            <h2 className="uppercase text-orange-500 font-semibold">
                                Flash Sale
                            </h2>
                        </div>
                        <div className="min-h-52 p-3">
                            <p className="text-center text-lg text-gray-500">
                                Chương trình sắp diễn ra
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
