import Link from "next/link";

const AdminAccountItem = () => {
    const urlUserDetail = "/admin/Dashboard/accounts";
    return (
        <div>
            <Link
                href={`${urlUserDetail}/account-detail/?user-id=${1234657864}`}
            >
                <div className="flex items-center gap-3 hover:bg-gray-700 p-4 py-4 border-b border-gray-600">
                    <div className="w-[10%]">
                        <span>1</span>
                    </div>
                    <div className="w-[20%]">
                        <span>Hoàng Anh Văn</span>
                    </div>
                    <div className="w-[20%]">
                        <span>0969464154</span>
                    </div>
                    <div className="w-[20%]">
                        <span className="inline-block py-1 px-3 bg-teal-600 text-white rounded-full text-sm">
                            2 ngày trước
                        </span>
                    </div>
                    <div className="w-[20%]">
                        <span className="inline-block py-1 px-3 bg-green-600 text-white rounded-full text-sm">
                            Đã kích hoạt
                        </span>
                    </div>
                    <div className="w-[10%]">
                        <span>Admin</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdminAccountItem;
