import React from "react";

const BannerTopPage = ({ title }) => {
    return (
        <div className="pt-12 pb-4">
            <h2 className="text-2xl text-center text-orange-500 uppercase">
                {title}
            </h2>
        </div>
    );
};

export default BannerTopPage;
