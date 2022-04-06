export const TABS = ["Thông tin chung", "Quá trình học tập"];
export const BREADCRUMB_DATA = [
  {
    text: "Hồ sơ học viên",
    link: "/dashboard/student",
  },
  {
    text: "Thông tin học viên",
    link: "/",
  },
];

export const MOCK_STUDENT = {
  name: "Trần Minh Quốc",
  gender: "Nam",
  birthday: "07/04/1999",
  bornPlace: "TP.Bạc Liêu",
  ethic: "Kinh",
  regilion: "Công giáo",
  semester: "2021-2022",
  grade: "7",
  class: "7A",
  id: "student-A5V6",
  admissionDay: "06/07/2021",
  admissionType: "Trúng tuyển",
  status: "Đang theo học",
  address: "ấp 16, xã Vĩnh hậu A, Hòa Bình, Bạc Liêu",
  email: "ts4blader@gmail.com",
  phoneNumber: "0706 863 720",
  family: {
    father: {
      name: "Trần Minh Phương",
      birthYear: "1966",
      job: "Nuôi trồng thủy sản",
      phoneNumber: "0123456789"
    },
    mother: {
      name: "Trần Thị Phương",
      birthYear: "1972",
      job: "Giáo viên",
      phoneNumber: "0123456789"
    },
    supervisor: {
      name: "Trần Công Bình",
      birthYear: "1975",
      job: "Luật sư",
      phoneNumber: "0123456789"
    },
  }

}

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
