import { PiEyeClosedLight } from "react-icons/pi";
import React from "react";

const page = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="sticky top-0 z-50 bg-[#24303F]">
                        <div className="p-4 flex items-center justify-between">
                            <h2 className="uppercase text-xl font-semibold">
                                Thành viên
                            </h2>
                            <div></div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="bg-[#24303F] p-4 rounded-md w-[500px] mx-auto ">
                            <div>
                                <div>
                                    <p>Họ tên</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value="Hoàng Anh Văn"
                                        className="bg-gray-600 p-2 rounded-sm outline-none w-full"
                                    />
                                </div>
                                <div className="pt-4">
                                    <p>Tài khoản</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        value="0969464154"
                                        className="bg-gray-600 p-2 rounded-sm outline-none w-full text-gray-300"
                                        readOnly="true"
                                    />
                                </div>
                                <div className="pt-4">
                                    <p>Email</p>
                                    <input
                                        type="mail"
                                        placeholder=""
                                        value="user@example.com"
                                        className="bg-gray-600 p-2 rounded-sm outline-none w-full text-gray-300"
                                        readOnly="true"
                                    />
                                </div>
                                <div className="pt-4">
                                    <p>Mật khẩu</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <div className="relative">
                                                <input
                                                    type="password"
                                                    placeholder=""
                                                    value="user@example.com"
                                                    className="bg-gray-600 p-2 rounded-sm outline-none w-full "
                                                />
                                                <span className="absolute right-1 top-1/2 -translate-y-1/2">
                                                    <PiEyeClosedLight />
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="p-2 bg-teal-600 rounded-sm">
                                                Tạo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <p>Chọn lại quyền người dùng</p>
                                    <select
                                        id="countries"
                                        class="bg-gray-600 border w-full outline-none text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2"
                                    >
                                        <option className="py-1" selected>
                                            Chọn
                                        </option>
                                        <option className="py-1" value="ADMIN">
                                            Admin
                                        </option>
                                        <option className="py-1" value="USER">
                                            User
                                        </option>
                                        <option className="py-1" value="EDITOR">
                                            Editor
                                        </option>
                                        <option className="py-1" value="DE">
                                            Germany
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <div className="py-4 pt-8">
                                        <button className="p-2 bg-orange-500 w-full rounded-full hover:opacity-70">
                                            Lưu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
