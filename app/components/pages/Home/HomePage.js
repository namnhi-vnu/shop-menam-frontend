import React from "react";
import SliderMain from "./SliderMain";
import FlashSales from "./FlashSales";

const HomePage = () => {
    return (
        <div>
            {/* slider main */}
            <div className="max-md:pt-4">
                <SliderMain />
            </div>
            <div>
                <FlashSales />
            </div>
        </div>
    );
};

export default HomePage;
