/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //         {
    //             source: "/product/:slug",
    //             destination: "/:slug",
    //         },
    //     ];
    // },

    images: {
        domains: ["nestvui.com", "thuongdinhyen.com", "res.cloudinary.com"], // Thêm hostname của nguồn hình ảnh vào đây
    },
};

export default nextConfig;
