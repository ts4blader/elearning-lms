export const BREADCRUMB_DATA = [
    {
        text: "Hồ sơ học viên",
        link: "/dashboard/student",
    },
    {
        text: "Tiếp nhận chuyển trường",
        link: "/",
    },
]

export const  SEMESTER_SELECT = [
    "2021-2022", "2022-2023"
]

export const TABLE_COLUMN = [
    {
        title: "Mã học viên",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Tên học viên",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Ngày sinh",
        dataIndex: "birthday",
        key: "birthday",
    },
    {
        title: "Giới tính",
        dataIndex: "gender",
        key: "gender",
    },
    {
        title: "Chuyển từ",
        dataIndex: "from",
        key: "from",
    },
    {
        title: "Học kỳ chuyển",
        dataIndex: "fromSemester",
        key: "fromSemester",
    },
    {
        title: "Khối",
        dataIndex: "grade",
        key: "grade",
    },
    {
        title: "Ngày chuyển",
        dataIndex: "transferDay",
        key: "transferDay",
    },
]