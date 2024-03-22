import HeaderAccount from "../components/Header/HeaderAccount";

const AccountLayout = ({ children }) => {
    return (
        <div>
            <header className="">
                <HeaderAccount />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default AccountLayout;
