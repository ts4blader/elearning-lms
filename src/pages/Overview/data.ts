import grade7 from "@seeds/classes/grade-7.json"
import grade6 from "@seeds/classes/grade-6.json"
import grade8 from "@seeds/classes/grade-8.json"

export const SEMESTER = ["2019-2020", "2020-2021", "2021-2022"];

export const CLASSES = ["Khối 6", "Khối 7", "Khối 8", "Khối 9"]
export const LEVELS = ["THCS", "THPT", "CH"]

export const STUDENTS_AMOUNT = [
    {
        class: "6",
        value: grade6.reduce((total, item) => (total + item.amount), 0),
    },
    {
        class: "7",
        value: grade7.reduce((total, item) => (total + item.amount), 0),
    },
    {
        class: "8",
        value: grade8.reduce((total, item) => (total + item.amount), 0),
    },
]

export const CARDS = [
    { 
        title: "5000",
        description: "Học viên",
        variant: "secondary",
    },
    { 
        title: "1500",
        description: "Giảng viên",
        variant: "primary",
    },
    { 
        title: "55",
        description: "Lớp học",
        variant: "secondary",
    },
]
