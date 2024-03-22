// Layout.js
import MainLayout from "../layouts/MainLayout";
import AccountLayout from "../layouts/AccountLayout";
import CheckoutLayout from "./CheckoutLayout";

const Layout = ({ children, type }) => {
    // Kiểm tra loại layout và trả về layout tương ứng
    switch (type) {
        case "main":
            return <MainLayout>{children}</MainLayout>;
        case "account":
            return <AccountLayout>{children}</AccountLayout>;
        case "checkout":
            return <CheckoutLayout>{children}</CheckoutLayout>;
        default:
            return <MainLayout>{children}</MainLayout>;
    }
};

export default Layout;
