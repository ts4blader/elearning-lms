export const BREADCRUMB_DATA = [
    {
        text: "Hồ sơ học viên",
        link: "/dashboard/student",
    },
    {
        text: "Hồ sơ bảo lưu",
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
        sorter: true
    },
    {
        title: "Tên học viên",
        dataIndex: "name",
        key: "name",
        sorter: true
    },
    {
        title: "Ngày sinh",
        dataIndex: "birthday",
        key: "birthday",
        sorter: true
    },
    {
        title: "Giới tính",
        dataIndex: "gender",
        key: "gender",
        sorter: true
    },
    {
        title: "Lớp bảo lưu",
        dataIndex: "reserveClass",
        key: "reserveClass",
        sorter: true
    },
    {
        title: "Ngày bảo lưu",
        dataIndex: "reserveDay",
        key: "reserveDay",
        sorter: true
    },
    {
        title: "Thời gian bảo lưu",
        dataIndex: "reserveDuration",
        key: "reserveDuration",
        sorter: true
    },
    {
        title: "Lý do",
        dataIndex: "reason",
        key: "reason",
    },
]