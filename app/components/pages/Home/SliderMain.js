"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const SliderMain = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Autoplay, Keyboard]}
                className="mySwiper h-[383px] max-md:h-auto max-lg:h-auto"
            >
                <SwiperSlide>
                    <Image
                        src="/slider_1.webp"
                        width={1400}
                        height={1400}
                        alt=""
                        className="w-full h-auto max-md:rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider_4.webp"
                        width={1400}
                        height={1400}
                        alt=""
                        className="w-full h-auto max-md:rounded-md"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderMain;
