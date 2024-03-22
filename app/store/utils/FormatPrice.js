export const formatterPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Ho_Chi_Minh",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Tách ngày và giờ từ kết quả đã định dạng
    const [datePart, timePart] = formattedDate.split(", ");

    return `${datePart}, ${timePart}`;
};
