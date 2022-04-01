import STUDENTS from "@seeds/thcs/students.json"

export const BREADCRUMB_DATA = [
    {
        text: "Khai báo dữ liệu",
        link: "/dashboard/database",
    },
    {
        text: "Lớp học",
        link: "/dashboard/database",
    },
    {
        text: "Chi tiết lớp học",
        link: "/",
    },
]

export const PILLARS = [
    [
        { key: "Niên khóa", value: "2021-2022"},
        { key: "Khoa khối", value: "Khối 6"},
        { key: "Mã lớp học", value: "ABC"},
        { key: "Tên lớp học", value: "6A1"},
    ],
    [
        { key: "GV chủ nhiệm", value: "Trần Minh Quốc"},
        { key: "Số lượng học viên", value: "45 học viên"},
        { key: "Loại lớp học", value: "Lớp học căn bản"},
        { key: "Số lượng môn học", value: "10 môn học"},
    ],
    [
        { key: "Mô tả", value: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sequi assumenda sunt itaque consequatur animi dicta, delectus quia iste maxime."},
    ],
]

export const STUDENT_CONFIG = {
    dataSource: STUDENTS,
    columns: [
        { title: ""}
    ]
}
