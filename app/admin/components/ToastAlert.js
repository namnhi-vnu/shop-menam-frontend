"use client";
import { useContext, useEffect } from "react";
import { BiCheckCircle } from "react-icons/bi";
import AdminProductContext from "../store/contexts/AdminProductContext";
import { setIsSuccsess } from "../store/acttions/adminPrdActions";
const ToastAlert = () => {
    const { state, dispatch } = useContext(AdminProductContext);
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(setIsSuccsess());
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [dispatch]);
    return (
        <div
            id="toast-top-right"
            className="fixed flex  items-center bg-[#E1FBE7] w-full  z-50 max-w-xs p-4 space-x-4 text-gray-500  divide-x divide-gray-200 rounded-lg shadow top-20 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 "
            role="alert"
        >
            <div className=" font-normal flex items-center gap-3 text-[1em] overflow-hidden">
                <span className="lines-alert absolute bottom-0 left-0 w-0 border-b-4 rounded-lg border-[#0E9F6E]"></span>
                <span className="text-[#0E9F6E] ">
                    <BiCheckCircle />
                </span>
                Thành công.
            </div>
        </div>
    );
};

export default ToastAlert;
