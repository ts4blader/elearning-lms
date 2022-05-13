export const RULES = {
  phoneNumber: {
    pattern: /[\d]+/g,
    message: "Số không hợp lệ",
  },
  number: {
    pattern: /[1-9][\d]*/g,
    message: "Số không hợp lệ",
  },
  minMaxNumber: (min: number = 0, max: number = Number.MAX_SAFE_INTEGER) => {
    return {
      type: "number" as any,
      transform: (value: any) => parseInt(value),
      min: min,
      max: max,
      message: `Số phải lớn hơn ${min} và nhỏ hơn ${max}`,
    };
  },
  required: {
    required: true,
    message: "Thông tin bắt buộc",
  },
  email: {
    type: "email" as any,
    message: "Xin hãy nhập email",
  },
};
