"use client";
import { useRouter } from "next/navigation";
import { useEffect, useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer, { initStateCart } from "../reducer/cartReducer";
import {
    setAddCart,
    setAddCartNotUser,
    setIsLoading,
    setIsLoadingCreateOrder,
    setOrderByUser,
} from "../actions/cartAction";
import axios from "axios";
import { BASE_URL, getRequestToken } from "../utils/services";
import { headers } from "@/node_modules/next/headers";

const CartProvider = ({ children }) => {
    const router = useRouter();
    const [state, dispatch] = useReducer(cartReducer, initStateCart);
    const { cart } = state;

    const checkToken = () => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        if (userCookie) {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            return userData.token;
        }
    };

    const addCart = async (productId, quantity) => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        dispatch(setAddCart({ cart: [{ _id: productId, count: quantity }] }));
        const dataCart = { cart: [{ _id: productId, count: quantity }] };
        if (userCookie) {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);
            const user_token = userData.token;
            try {
                const response = await axios.post(
                    `${BASE_URL}/user/cart`,
                    dataCart,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${user_token}`,
                        },
                    },
                );
                const responseGet = await getRequestToken(
                    `${BASE_URL}/user/cart`,
                    user_token,
                );

                // console.log(response.data);
                dispatch(setAddCart({ cart: responseGet.data }));
                // dispatch(setAddCart({ cart: response.data }));
                // console.log(response);
            } catch (error) {
                console.log(error.message);
            }
        } else {
            const prdDataJSON = sessionStorage.getItem("AllProducts");
            const productsData = JSON.parse(prdDataJSON);
            // Kiểm tra nếu giỏ hàng không tồn tại hoặc không phải là một đối tượng
            // if (!cart || typeof cart !== "object") {
            //     console.error("Invalid cart data");
            //     return;
            // }

            // Lấy ra danh sách sản phẩm từ giỏ hàng hiện tại
            const currentCartProducts = cart?.products || [];

            // Tìm sản phẩm trong danh sách sản phẩm
            const productToAdd = productsData.find(
                (product) => product._id === productId,
            );

            // Nếu sản phẩm không tồn tại, không làm gì cả
            if (!productToAdd) {
                console.error("Product not found");
                return;
            }

            // Tính tổng giá trị sản phẩm mới
            const productTotalPrice = productToAdd.price * quantity;

            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingProductIndex = currentCartProducts.findIndex(
                (product) => product.product._id === productId,
            );

            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng của nó và cập nhật giá trị tổng của giỏ hàng
            if (existingProductIndex !== -1) {
                const updatedProducts = [...currentCartProducts];
                const existingProduct = updatedProducts[existingProductIndex];
                existingProduct.count += quantity;
                existingProduct.price = existingProduct.price;
                const totalPrice = cart.cartTotal + productTotalPrice;
                const updatedCart = {
                    ...cart,
                    cartTotal: totalPrice,
                    products: updatedProducts,
                };
                dispatch(setAddCartNotUser(updatedCart));

                // update localStorage
                localStorage.setItem(
                    "cartNotUser",
                    JSON.stringify(updatedCart),
                );
                return;
            }

            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
            const updatedProducts = [
                ...currentCartProducts,
                {
                    category: productToAdd.category,
                    count: quantity,
                    image: productToAdd.image,
                    price: productToAdd.price,
                    product: productToAdd,
                },
            ];

            // Tính tổng giá trị giỏ hàng mới
            const totalPrice = (cart?.cartTotal || 0) + productTotalPrice;

            // Tạo dữ liệu giỏ hàng mới với sản phẩm mới và tổng giá trị mới
            const updatedCart = {
                ...cart,
                cartTotal: totalPrice,
                products: updatedProducts,
            };

            // Cập nhật trạng thái giỏ hàng với dữ liệu giỏ hàng mới
            dispatch(setAddCartNotUser(updatedCart));
            localStorage.setItem("cartNotUser", JSON.stringify(updatedCart));
        }
    };

    // update khi tăng giảm sản phẩm
    const setUpdatePlusCart = async (cart, productId, quantity, action) => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        if (userCookie) {
            cart?.cart?.products?.map(async (product) => {
                if (product.product._id === productId) {
                    try {
                        const userDataJSON = userCookie.split("=")[1];
                        const userData = JSON.parse(userDataJSON);
                        const token = userData.token;
                        const response = await axios.put(
                            `${BASE_URL}/user/update-cart`,
                            {
                                productId,
                                quantity: quantity,
                                action,
                            },
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                            },
                        );
                        const responseGet = await getRequestToken(
                            `${BASE_URL}/user/cart`,
                            token,
                        );

                        dispatch(setAddCart({ cart: responseGet.data }));
                    } catch (error) {
                        console.log(error.message);
                    }
                }
            });
        } else {
            // Lấy ra danh sách sản phẩm từ giỏ hàng hiện tại
            const currentCartProducts = cart.products || [];

            // Tìm sản phẩm trong danh sách sản phẩm
            const existingProductIndex = currentCartProducts.findIndex(
                (product) => product.product._id === productId,
            );

            if (existingProductIndex !== -1) {
                const updatedProducts = [...currentCartProducts];
                const existingProduct = updatedProducts[existingProductIndex];

                // Tăng số lượng
                if (action === "increase") {
                    existingProduct.count += quantity;
                }
                // Giảm số lượng
                else if (action === "decrease") {
                    existingProduct.count -= quantity;
                    // Nếu số lượng giảm xuống 0, xóa sản phẩm khỏi giỏ hàng
                    if (existingProduct.count <= 0) {
                        updatedProducts.splice(existingProductIndex, 1);
                    }
                }

                // Tính lại tổng giá trị của tất cả sản phẩm trong giỏ hàng
                const totalPrice = updatedProducts.reduce((total, product) => {
                    return total + product.count * product.product.price;
                }, 0);

                // Cập nhật giỏ hàng với sản phẩm mới và tổng tiền mới
                const updatedCart = {
                    ...cart,
                    cartTotal: totalPrice,
                    products: updatedProducts,
                };

                // Cập nhật trạng thái giỏ hàng
                dispatch(setAddCartNotUser(updatedCart));

                // Cập nhật localStorage
                localStorage.setItem(
                    "cartNotUser",
                    JSON.stringify(updatedCart),
                );
            }
        }
    };

    const createOrderUser = async (data) => {
        try {
            const token = checkToken();
            if (token) {
                dispatch(setIsLoadingCreateOrder());
                const response = await axios.post(
                    `${BASE_URL}/user/cart/cash-order`,
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                const emptyCart = await axios.delete(
                    `${BASE_URL}/user/empty-cart`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                dispatch(setIsLoadingCreateOrder());
                dispatch(setAddCart({ cart: [] }));
                if (response.data.success) {
                    router.push("/checkout/thankyou");
                }
                // console.log(response);
            }
        } catch (error) {}
    };
    const createOrderNotUser = async (data) => {
        try {
            dispatch(setIsLoadingCreateOrder());
            const response = await axios.post(
                `${BASE_URL}/user/cart/cash-order-no-user`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            dispatch(setIsLoadingCreateOrder());

            if (response.data.success) {
                dispatch(setAddCart({ cart: [] }));
                localStorage.removeItem("cartNotUser");
                router.push("/checkout/thankyou");
            }
            console.log(response);
        } catch (error) {}
    };

    const removeCart = async (id) => {
        try {
            const token = checkToken();
            if (token) {
                const response = await axios.delete(
                    `${BASE_URL}/user/delete-cart/${id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                console.log(response);
                const responseGet = await getRequestToken(
                    `${BASE_URL}/user/cart`,
                    token,
                );

                dispatch(setAddCart({ cart: responseGet.data }));
            } else {
                const cartNotUser = localStorage.getItem("cartNotUser");
                if (cartNotUser) {
                    const cart = JSON.parse(cartNotUser);
                    if (cart.products.length > 1) {
                        const productIndex = cart.products.findIndex(
                            (product) => product.product._id === id,
                        );
                        if (productIndex !== -1) {
                            cart.products.splice(productIndex, 1);

                            // Tính lại tổng giá trị của tất cả sản phẩm trong giỏ hàng
                            const totalPrice = cart.products.reduce(
                                (total, product) => {
                                    return (
                                        total +
                                        product.count * product.product.price
                                    );
                                },
                                0,
                            );

                            // Cập nhật giỏ hàng với sản phẩm mới và tổng tiền mới
                            const updatedCart = {
                                cartTotal: totalPrice,
                                products: cart.products,
                            };
                            dispatch(setAddCartNotUser(updatedCart));

                            // Lưu lại giỏ hàng đã được cập nhật vào localStorage
                            localStorage.setItem(
                                "cartNotUser",
                                JSON.stringify(updatedCart),
                            );

                            console.log(updatedCart);
                        } else {
                            console.log(
                                "Không tìm thấy sản phẩm trong giỏ hàng.",
                            );
                        }
                    } else {
                        localStorage.removeItem("cartNotUser");
                        dispatch(setAddCartNotUser({ cart: [] }));
                    }
                } else {
                    console.log("Không có dữ liệu trong localStorage.");
                }
            }
        } catch (error) {}
    };

    const getOrderByUser = async () => {
        const token = checkToken();
        if (token) {
            try {
                dispatch(setIsLoading());
                const response = await axios.get(
                    `${BASE_URL}/user/get-orders`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                dispatch(setOrderByUser(response.data));
                dispatch(setIsLoading());
            } catch (error) {}
        }
    };

    useEffect(() => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        try {
            if (userCookie) {
                const userDataJSON = userCookie.split("=")[1];
                const userData = JSON.parse(userDataJSON);
                const token = userData.token;
                const getCartUsers = async () => {
                    const response = await getRequestToken(
                        `${BASE_URL}/user/cart`,
                        token,
                    );
                    dispatch(setAddCart({ cart: response?.data }));
                };
                getCartUsers();
            } else {
                const getCartNotUser = localStorage.getItem("cartNotUser");
                const cartJson = JSON.parse(getCartNotUser);

                dispatch(setAddCartNotUser(cartJson));
            }
        } catch (error) {}
    }, []);
    return (
        <CartContext.Provider
            value={{
                state,
                dispatch,
                addCart,
                setUpdatePlusCart,
                removeCart,
                createOrderUser,
                createOrderNotUser,
                getOrderByUser,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
