import { useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { BASE_URL } from "../utils/services";
import AdminAuthContext from "../contexts/AdminAuthContext";
import { setIsLoadingCheckAdmin } from "../actions/adminAuthActions";

const AuthAdmin = () => {
    const { state, dispatch } = useContext(AdminAuthContext);
    const router = useRouter();
    const { isLoadingCheck } = state;

    // check token
    const checkToken = () => {
        const userCookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("MeNamUser="));
        if (userCookie) {
            const userDataJSON = userCookie.split("=")[1];
            const userData = JSON.parse(userDataJSON);

            return userData;
        }
        return userCookie;
    };

    useEffect(() => {
        const checkCookieExpiration = async () => {
            const getToken = checkToken();
            console.log("checy", getToken);
            if (getToken) {
                console.log("hihi có admin");
                try {
                    const token = getToken.token;
                    const getUserId = getToken._id;
                    const response = await axios.get(
                        `${BASE_URL}/user/get-user/${getUserId}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    dispatch(setIsLoadingCheckAdmin(false));
                    if (response.data.role === "admin") {
                        // router.push("/");
                    } else {
                        router.push("/");
                    }
                    // dispatch(setUser({ user: response.data }));
                } catch (error) {
                    console.error(
                        "Lỗi khi gửi yêu cầu lấy thông tin người dùng:",
                        error,
                    );
                }
            } else {
                router.push("/admin/login");
                // dispatch(setIsLoadingCheckAdmin(false));
                console.log("hihi không có admin");
            }
            console.log(isLoadingCheck);
        };

        checkCookieExpiration();
    }, []);

    return null; // hoặc có thể trả về một phần tử trống nếu cần
};

export default AuthAdmin;
