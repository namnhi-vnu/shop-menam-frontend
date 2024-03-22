import { useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import AuthContext from "../contexts/authContext";
import { setUser } from "../actions/authAction";
import { BASE_URL } from "../utils/services";

const AuthLogin = () => {
    const { dispatch } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        const checkCookieExpiration = async () => {
            const userCookie = document.cookie
                .split("; ")
                .find((cookie) => cookie.startsWith("MeNamUser="));

            if (userCookie) {
                const userDataJSON = userCookie.split("=")[1];
                const userData = JSON.parse(userDataJSON);

                const user_id = userData._id;
                try {
                    const response = await axios.get(
                        `${BASE_URL}/user/get-user/${user_id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${userData.token}`,
                            },
                        },
                    );

                    if (response.data.success) {
                        // router.push("/");
                    } else {
                        router.push("/account/login");
                    }
                    dispatch(setUser({ user: response.data }));
                } catch (error) {
                    console.error(
                        "Lỗi khi gửi yêu cầu lấy thông tin người dùng:",
                        error,
                    );
                }
            } else {
                router.push("/account/login");
            }
        };

        checkCookieExpiration();
    }, [dispatch, router]);

    return null; // hoặc có thể trả về một phần tử trống nếu cần
};

export default AuthLogin;
