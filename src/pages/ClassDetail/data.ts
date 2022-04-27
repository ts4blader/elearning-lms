import STUDENTS from "@seeds/thcs/students.json"
import StudentTable from "./StudentTable";
import SubjectTable from "./SubjectTable";

export const TABLES = [{
    table: StudentTable,
},
    {
        table: SubjectTable
    }
];

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
        { label: "Niên khóa", value: "2021-2022"},
        { label: "Khoa khối", value: "Khối 6"},
        { label: "Mã lớp học", value: "ABC"},
        { label: "Tên lớp học", value: "6A1"},
    ],
    [
        { label: "GV chủ nhiệm", value: "Trần Minh Quốc"},
        { label: "Số lượng học viên", value: "45 học viên"},
        { label: "Loại lớp học", value: "Lớp học căn bản"},
        { label: "Số lượng môn học", value: "10 môn học"},
    ],
    [
        { label: "Mô tả", value: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sequi assumenda sunt itaque consequatur animi dicta, delectus quia iste maxime."},
    ],
]

export const STUDENT_CONFIG = {
    dataSource: STUDENTS,
    columns: [
        { title: ""}
    ]
}
