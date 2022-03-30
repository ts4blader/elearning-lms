export const RULES = {
    phoneNumber: {
        pattern: /[\d]+/g,
        message: "Số không hợp lệ",
    },
    number: {
        pattern: /[1-9][\d]*/g,
        message: "Số không hợp lệ",
    },
    required: {
        required: true, message: "Thông tin bắt buộc"
    }
}