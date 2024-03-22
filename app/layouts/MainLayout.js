import Footer from "../components/Footer/Footer";
import NavbarMobile from "../components/Footer/NavbarMobile";
import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
    return (
        <div>
            <header className="max-md:sticky  max-md:top-0 max-md:z-50 max-md:w-full max-md:left-0">
                <Header />
            </header>
            <div className="navbar-mobile  max-md:fixed max-md:bottom-0 max-md:z-50 max-md:w-full max-md:left-0 lg:hidden md:hidden bg-white shadow border border-gray-200">
                <NavbarMobile />
            </div>
            <div>{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
