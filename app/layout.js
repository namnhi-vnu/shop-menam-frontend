import { K2D } from "next/font/google";
const inter = K2D({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import "./globals.css";
import AuthProvider from "./store/contexts/authProvider";
import ProductProvider from "./store/contexts/prdProvider";
import CartProvider from "./store/contexts/cartProvider";
import AdminAuthProvider from "./store/contexts/AdminAuthProvider";
export const metadata = {
    title: "Shop Mẹ Nấm",
    description: "Shop Mẹ Nấm",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body className={inter.className}>
                <AdminAuthProvider>
                    <AuthProvider>
                        <ProductProvider>
                            <CartProvider>
                                <div className="appssss">{children}</div>
                            </CartProvider>
                        </ProductProvider>
                    </AuthProvider>
                </AdminAuthProvider>
            </body>
        </html>
    );
}
