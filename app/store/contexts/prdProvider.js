"use client";
import { useEffect, useReducer } from "react";
import axios from "axios";
import ProductContext from "./prdContext";
import prdReducer, { initStatePrd } from "../reducer/prdReducer";
import { BASE_URL, getRequestToken } from "../utils/services";
import {
    setIsLoading,
    setMenuCategory,
    setProductByCategory,
    setProductDetail,
    setProductsAll,
} from "../actions/prdAction";

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(prdReducer, initStatePrd);
    const { allProducts } = state;

    // check if user login,if true the get all products in cookie
    useEffect(() => {
        // get all products
        const getAllProducts = async () => {
            const prdDataJSON = sessionStorage.getItem("AllProducts");

            if (!prdDataJSON?.length > 0) {
                try {
                    const response = await getRequestToken(
                        `${BASE_URL}/product`,
                    );
                    let days = 2;
                    let date = new Date();
                    const expires = new Date(
                        date.getTime() + days * 24 * 60 * 60 * 1000,
                    );

                    sessionStorage.setItem(
                        "AllProducts",
                        JSON.stringify(response.data.product),
                    );
                    dispatch(
                        setProductsAll({ allProducts: response.data.product }),
                    );
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                const products = JSON.parse(prdDataJSON);
                dispatch(setProductsAll({ allProducts: products }));
            }
        };

        getAllProducts();

        const getAllCategory = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/category`);

                dispatch(setMenuCategory(response.data));
            } catch (error) {}
        };
        getAllCategory();
    }, []);

    // get products by category
    const getProductsByCategory = async (slug) => {
        try {
            dispatch(setIsLoading());
            const response = await axios.get(
                `${BASE_URL}/product/category/${slug}`,
            );
            dispatch(setIsLoading());

            dispatch(setProductByCategory(response.data));
        } catch (error) {}
    };

    const getProductDetails = async (slug) => {
        try {
            // dispatch(setIsLoading());
            const response = await axios.get(`${BASE_URL}/product/${slug}`);
            // dispatch(setIsLoading());
            dispatch(setProductDetail(response.data));
        } catch (error) {}
    };
    return (
        <ProductContext.Provider
            value={{
                state,
                dispatch,
                getProductDetails,
                getProductsByCategory,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
// http://localhost:5000/api/product/category/5?sort=price&limit=10&page=2&fields=name,price
