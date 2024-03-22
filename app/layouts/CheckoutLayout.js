import HeaderCheckout from "../checkout/HeaderCheckout";

const CheckoutLayout = ({ children }) => {
    return (
        <div>
            {/* <header>
                <HeaderCheckout />
            </header> */}
            <main>{children}</main>
        </div>
    );
};

export default CheckoutLayout;
