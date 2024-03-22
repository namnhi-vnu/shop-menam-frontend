export const BASE_URL = "http://192.168.1.4:5000/api";
import axios from "axios";
export const postRequest = async (url, body) => {
    const response = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
};

export const getRequestNotToken = async (url) => {
    try {
        const response = await axios.get(`${url}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (error) {}
};

export const getRequestToken = async (url, token) => {
    try {
        const response = await axios.get(`${url}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {}
};
