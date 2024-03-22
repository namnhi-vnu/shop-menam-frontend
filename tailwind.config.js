/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-hover": "#FCAF17",
                "color-origin": "#FEEEEA",
                "color-old-price": "#BDBDBD",
                "color-price": "rgb(244 63 94)",
                "color-gray": "rgba(0,0,0,.54)",
                "color-green": "#25a35c",
            },
            backgroundImage: {
                "color-add-cart":
                    "linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%)",
            },
            container: {
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1200px",
                    xl: "1200px",
                    "2xl": "1200px",
                },
            },
            keyframes: {
                wiggle: {
                    "0%, ": { left: "-100%" },
                    "100%": { left: "0%" },
                },
            },
            animation: {
                menu: " 3s linear ",
            },
        },
    },
    plugins: [],
};
