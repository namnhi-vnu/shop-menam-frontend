"use client";
import Layout from "@/app/layouts/Layout";
import Image from "next/image";
import { IoIosCamera } from "react-icons/io";
import NavbarLeftAccount from "../../components/Header/NavbarLeftAccount";
import BannerTopPage from "../pages/BannerTopPage";
import { useContext } from "react";
import AuthContext from "@/app/store/contexts/authContext";
import { setUpdateAccount } from "@/app/store/actions/authAction";
import Loading from "@/app/components/Loading";
import AuthLogin from "@/app/store/middleware/LoginAuth";

const page = () => {
    AuthLogin();
    const { state, dispatch, updateUser, uploadAvatar } =
        useContext(AuthContext);
    const { formEditAccount, isLoading } = state;
    const {
        formEditAccount: { firstname, phone, gender, birthday, avatar },
    } = state;

    const handlerGetInput = (e) => {
        dispatch(setUpdateAccount({ [e.target.name]: e.target.value }));
    };

    const handlerOnsubmitEditAccount = (e) => {
        e.preventDefault();
        updateUser(formEditAccount);
    };

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("images", file);

            try {
                await uploadAvatar(formData); // Truyền FormData chứa tệp ảnh
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return (
        <Layout type="main">
            <div className="max-md:hidden">
                <BannerTopPage title="Tài khoản" />
            </div>

            <div className="container mx-auto py-7 max-md:py-2">
                <div>
                    <div className="flex items-start gap-8 max-md:block">
                        <div className="">
                            <NavbarLeftAccount />
                        </div>
                        <div className="flex-1 shadow h-[527px] max-md:h-auto">
                            <div>
                                <div>
                                    <div className="p-4 border-b border-b-gray-200">
                                        {/* tab */}
                                        <div className="pb-6 max-md:pb-0">
                                            <ul>
                                                <li className="text-xl font-semibold">
                                                    Hồ Sơ Của Tôi
                                                </li>
                                            </ul>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <form action="">
                                                    <div className="flex flex-col gap-5">
                                                        <div className="flex items-center gap-4">
                                                            <span className="min-w-[110px] w-1/5">
                                                                Tên đăng nhập
                                                            </span>
                                                            <span className="text-gray-400 select-none">
                                                                {phone}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="min-w-[110px] w-1/5">
                                                                Họ tên
                                                            </span>
                                                            <input
                                                                name="firstname"
                                                                onChange={
                                                                    handlerGetInput
                                                                }
                                                                type="text"
                                                                value={
                                                                    firstname
                                                                }
                                                                className="outline-none border w-full border-gray-200 p-2"
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="min-w-[110px] w-1/5">
                                                                Số điện thoại
                                                            </span>
                                                            <input
                                                                name="phone"
                                                                onChange={
                                                                    handlerGetInput
                                                                }
                                                                type="text"
                                                                value={phone}
                                                                className="outline-none border w-full border-gray-200 p-2"
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="min-w-[110px] w-1/5">
                                                                Giới tính
                                                            </span>
                                                            <div className="flex items-center gap-5">
                                                                <label htmlFor="nam">
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        value="Nam"
                                                                        id="nam"
                                                                        checked={
                                                                            gender ===
                                                                            "Nam"
                                                                        }
                                                                        onChange={
                                                                            handlerGetInput
                                                                        }
                                                                    />{" "}
                                                                    Nam
                                                                </label>
                                                                <label htmlFor="nu">
                                                                    <input
                                                                        type="radio"
                                                                        name="gender"
                                                                        id="nu"
                                                                        value="Nữ"
                                                                        checked={
                                                                            gender ===
                                                                            "Nữ"
                                                                        }
                                                                        onChange={
                                                                            handlerGetInput
                                                                        }
                                                                    />{" "}
                                                                    Nữ
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className="min-w-[110px] w-1/5">
                                                                Ngày sinh
                                                            </span>
                                                            <div className="flex-1">
                                                                <input
                                                                    type="date"
                                                                    value={
                                                                        birthday
                                                                    }
                                                                    name="birthday"
                                                                    onChange={
                                                                        handlerGetInput
                                                                    }
                                                                    id=""
                                                                    className="outline-none border w-full border-gray-200 p-2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" max-md:flex pt-4 lg:hidden flex items-center justify-center">
                                                        <div>
                                                            <div>
                                                                <Image
                                                                    src={`${avatar || "https://res.cloudinary.com/dfnwjuvbc/image/upload/v1711101114/images/en0yhhjtsilnaqakjifo.png"}`}
                                                                    width={120}
                                                                    height={120}
                                                                    alt=""
                                                                    className="border border-gray-100 object-cover"
                                                                />
                                                            </div>
                                                            <div className="py-2">
                                                                <label
                                                                    htmlFor="imageProduct"
                                                                    className="cursor-pointer"
                                                                >
                                                                    <input
                                                                        type="file"
                                                                        onChange={(
                                                                            event,
                                                                        ) =>
                                                                            handleFileSelect(
                                                                                event,
                                                                            )
                                                                        }
                                                                        className="sr-only"
                                                                        id="imageProduct"
                                                                    />
                                                                    <div className="flex items-center justify-center">
                                                                        <div className="flex items-center gap-3 border border-orange-500 rounded-md px-2 ">
                                                                            <span className="text-xl">
                                                                                <IoIosCamera />
                                                                            </span>
                                                                            <span>
                                                                                Chọn
                                                                                ảnh
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-5">
                                                        <button
                                                            onClick={(e) =>
                                                                handlerOnsubmitEditAccount(
                                                                    e,
                                                                )
                                                            }
                                                            className="bg-orange-500 rounded-md text-white py-2 px-8 hover:opacity-80"
                                                        >
                                                            {isLoading ? (
                                                                <Loading />
                                                            ) : (
                                                                "Lưu"
                                                            )}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className=" w-[300px] max-md:hidden flex items-center justify-center">
                                                <div>
                                                    <div>
                                                        <Image
                                                            src={`${avatar || "https://res.cloudinary.com/dfnwjuvbc/image/upload/v1711101114/images/en0yhhjtsilnaqakjifo.png"}`}
                                                            width={120}
                                                            height={120}
                                                            alt=""
                                                            className="border border-gray-100 object-cover"
                                                        />
                                                    </div>
                                                    <div className="py-2">
                                                        <label
                                                            htmlFor="imageProduct"
                                                            className="cursor-pointer"
                                                        >
                                                            <input
                                                                type="file"
                                                                onChange={(
                                                                    event,
                                                                ) =>
                                                                    handleFileSelect(
                                                                        event,
                                                                    )
                                                                }
                                                                className="sr-only"
                                                                id="imageProduct"
                                                            />
                                                            <div className="flex items-center justify-center">
                                                                <div className="flex items-center gap-3 border border-orange-500 rounded-md px-2 ">
                                                                    <span className="text-xl">
                                                                        <IoIosCamera />
                                                                    </span>
                                                                    <span>
                                                                        Chọn ảnh
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default page;
