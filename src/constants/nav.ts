import {
    EyeOutlined,
    LineChartOutlined,
    TeamOutlined,
    ProfileOutlined,
    ReadOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  

export const CATALOG = [
    {
        name: "overview",
        link: "/",
        text: "Tổng quan",
        icon: EyeOutlined,
    },
    {
        name: "database",
        link: "/database",
        text: "Khai báo dữ liệu",
        icon: LineChartOutlined,
    },
    {
        name: "student",
        link: "/student",
        text: "Hồ sơ học sinh",
        icon: TeamOutlined,
        children: [
            {
                name: "all",
                link: "/",
                text: "Tất cả hồ sơ",
            },
            {
                name: "transfer",
                link: "/transfer",
                text: "Tiếp nhận chuyển trường",
            },
            {
                name: "reserve",
                link: "/reserve",
                text: "Bảo lưu",
            },
        ]
    },
    {
        name: "lecture",
        link: "/lecture",
        text: "Hồ sơ giảng viên",
        icon: ProfileOutlined,
        children: [
            {
                name: "all",
                link: "/",
                text: "Tất cả hồ sơ",
            },
            {
                name: "schedule",
                link: "/schedule",
                text: "Phân công giảng dạy",
            },
        ]

    },
    {
        name: "examination",
        link: "/examination",
        text: "Thi cử",
        icon: ReadOutlined,
    },
    {
        name: "setting",
        link: "/setting",
        text: "Cài đặt hệ thống",
        icon: SettingOutlined,
    },

]

export const OPEN_KEYS = CATALOG.filter(item => item.children).map(item => item.name)
