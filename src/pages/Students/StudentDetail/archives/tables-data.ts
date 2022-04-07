import examData from "@seeds/student/exam.json"
import examData2 from "@seeds/student/exam2.json"

export const OVERVIEW = [
    {   
        semester: "Học kỳ I",
        rank: "Khá",
        conduct: "Tốt",
        average: 7.4
    },
    {
        semester: "Học kỳ II",
        rank: "Khá",
        conduct: "Tốt",
        average: 7.4
    },
    {
        semester: "Cả năm",
        rank: "Khá",
        conduct: "Tốt",
        average: 7.4
    },
]

export const TABS = [
    {
        text: "Học kỳ I",
        name: "first",
        source: examData
    },
    {
        text: "Học kỳ II",
        name: "second",
        source: examData2
    },
]

export const RESULT_TABLE = 
 [
    {
        title: "Môn học",
        dataIndex: "subject",
        key: "subject",
    },
    {
        title: "Chuyên cần",
        dataIndex: "dilligence",
        key: "dilligence",
    },
    {
        title: "Kiểm tra đầu giờ",
        dataIndex: "breakExam",
        key: "breakExam",
    },
    {
        title: "15 phút",
        dataIndex: "quarterExam",
        key: "quarterExam",
    },
    {
        title: "45 phút",
        dataIndex: "lessonExam",
        key: "lessonExam",
    },
    {
        title: "Cuối kỳ",
        dataIndex: "finalExam",
        key: "finalExam",
    },
    {
        title: "Điểm trung bình",
        dataIndex: "average",
        key: "average",
    },
]
