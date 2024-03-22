"use client";
import Image from "next/image";

import { BsCheck } from "react-icons/bs";
import { IoIosCamera } from "react-icons/io";

import EditorWrapper from "@/app/admin/components/DynamicEditor";
import { useContext } from "react";
import AdminProductContext from "@/app/admin/store/contexts/AdminProductContext";
import { SetFormProduct } from "@/app/admin/store/acttions/adminPrdActions";
import AdminCategoryProductContext from "@/app/admin/store/contexts/AdminCategoryProductContext";
import ToastAlert from "@/app/admin/components/ToastAlert";
import Loading from "@/app/components/Loading";

const page = () => {
    const { state, dispatch, handleUploadImage, createProduct } =
        useContext(AdminProductContext);

    const { state: categoryAll } = useContext(AdminCategoryProductContext);
    const { dataFormNewPrd, isSuccsess, isLoading } = state;
    const {
        dataFormNewPrd: { title, category, price, oldPrice, quantity, image },
    } = state;
    console.log(isLoading, isSuccsess);
    const handlerGetForm = (e) => {
        dispatch(SetFormProduct({ [e.target.name]: e.target.value }));
    };

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("images", file);

            try {
                await handleUploadImage(formData); // Truyền FormData chứa tệp ảnh
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    // handle Create new product

    const handlerCreateNewProduct = () => {
        if (
            title !== "" &&
            price !== "" &&
            image.length > 0 &&
            category !== ""
        ) {
            createProduct(dataFormNewPrd);
        }
    };

    return (
        <div>
            <div className="admin-new-product">
                <div className="p-4 sticky top-0 z-50 bg-[#24303F]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl ">Thêm sản phẩm</h2>
                        <div>
                            <button
                                onClick={handlerCreateNewProduct}
                                className="font-semibold bg-teal-500 text-teal-900 py-2 px-8 rounded-full hover:opacity-70"
                            >
                                {isLoading ? <Loading /> : "Đăng"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-8 relative">
                    {isSuccsess && <ToastAlert />}

                    {/* left */}
                    <div className=" pt-0 ">
                        <div>
                            <textarea
                                name="title"
                                value={title}
                                onChange={(e) => handlerGetForm(e)}
                                id=""
                                rows="1"
                                type="text"
                                placeholder="Tiêu đề..."
                                className="w-full p-2 resize-none text-xl outline-none border-b border-gray-600 bg-transparent "
                            ></textarea>
                        </div>
                        <div className="pt-8 grid grid-cols-4 gap-8">
                            <div className="bg-slate-300 h-max col-span-3 relative  rounded-md overflow-hidden">
                                <EditorWrapper />
                            </div>
                            <div>
                                {/* right */}
                                <div>
                                    <div className="bg-[#24303F] p-4 rounded-md">
                                        <h2 className=" pb-3 uppercase font-semibold">
                                            Giá sản phẩm
                                        </h2>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    value={price}
                                                    onChange={(e) =>
                                                        handlerGetForm(e)
                                                    }
                                                    className="w-full bg-transparent outline-none border border-gray-600 p-2 rounded-sm"
                                                    placeholder="Nhập Giá Bán"
                                                />
                                                <span className="text-xs">
                                                    VNĐ
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name="oldPrice"
                                                    value={oldPrice}
                                                    onChange={(e) =>
                                                        handlerGetForm(e)
                                                    }
                                                    className="w-full bg-transparent outline-none border border-gray-600 p-2 rounded-sm"
                                                    placeholder="Nhập Giá Cũ"
                                                />
                                                <span className="text-xs">
                                                    VNĐ
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="pt-8">
                                                <h2 className=" pb-4 uppercase font-semibold">
                                                    Danh Mục Sản Phẩm
                                                </h2>
                                                <div className="pl-4">
                                                    <ul className="flex flex-col gap-2">
                                                        {categoryAll?.categoryAll?.map(
                                                            (cateItem) => (
                                                                <li
                                                                    key={
                                                                        cateItem._id
                                                                    }
                                                                >
                                                                    <label
                                                                        htmlFor={
                                                                            cateItem._id
                                                                        }
                                                                        className="cursor-pointer select-none"
                                                                    >
                                                                        <div className="relative flex items-center ">
                                                                            <input
                                                                                type="radio"
                                                                                name="category"
                                                                                id={
                                                                                    cateItem._id
                                                                                }
                                                                                className="sr-only"
                                                                                value={
                                                                                    cateItem.title
                                                                                }
                                                                                onChange={
                                                                                    handlerGetForm
                                                                                }
                                                                                checked={
                                                                                    category ===
                                                                                    cateItem.title
                                                                                }
                                                                            />
                                                                            <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-gray-600 dark:border-strokedark ">
                                                                                <span className="text-white tich">
                                                                                    <BsCheck />
                                                                                </span>
                                                                            </div>
                                                                            <p>
                                                                                {
                                                                                    cateItem.title
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </label>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-8">
                                            <div>
                                                <div>
                                                    <h2 className="text-sm pb-2 uppercase font-semibold">
                                                        Số lượng tồn kho
                                                    </h2>
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        value={quantity}
                                                        onChange={(e) =>
                                                            handlerGetForm(e)
                                                        }
                                                        className="w-full bg-transparent outline-none border border-gray-600 p-2 rounded-sm"
                                                        placeholder="Nhập số lượng tồn kho"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-8">
                                            <div>
                                                <div>
                                                    <h2 className="text-sm pb-2 uppercase font-semibold">
                                                        Ảnh đại diện
                                                    </h2>
                                                    <div>
                                                        <div className="pt-4 flex items-center justify-center">
                                                            <Image
                                                                src={`${image[0]?.url || "/image-default.png"} `}
                                                                width={200}
                                                                height={200}
                                                                alt=""
                                                                className="rounded-md  h-auto"
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
                                                                    <div className="flex items-center gap-3 border border-teal-600 rounded-md px-2 bg-teal-600 ">
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
                                            </div>
                                        </div>
                                        <div className="py-8">
                                            <div>
                                                <h2 className="text-sm pb-2 uppercase font-semibold">
                                                    Album Ảnh
                                                </h2>
                                                <div>
                                                    <div className="py-2">
                                                        <label
                                                            htmlFor="imageProduct"
                                                            className="cursor-pointer"
                                                        >
                                                            <input
                                                                type="file"
                                                                className="sr-only"
                                                                id="imageProduct"
                                                            />
                                                            <div className="flex items-center justify-center">
                                                                <div className="flex items-center gap-3 border border-teal-600 rounded-md px-2 bg-teal-600 ">
                                                                    <span className="text-xl">
                                                                        <IoIosCamera />
                                                                    </span>
                                                                    <span>
                                                                        Chọn
                                                                        album
                                                                        ảnh
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
        </div>
    );
};

export default page;
