import * as LECTURE_INFO from "./LectureInfo";

export const BREADCRUMB_DATA = [
  {
    text: "Hồ sơ giảng viên",
    link: "/dashboard/lecture",
  },
  {
    text: "Thông tin giảng viên",
    link: "/",
  },
];

export const TABS = [
  {
    text: "Thông tin chung",
    panel: LECTURE_INFO.Panel,
    content: LECTURE_INFO.Content,
  },
  {
    text: "Quá trình công tác",
    panel: LECTURE_INFO.Panel,
    content: LECTURE_INFO.Content,
  },
];

export const MOCK_LECTURE = {
  name: "Trần Minh Quốc",
  id: "lecture-AN45",
  autoGenerate: true,
  group: "Toán - Lý - Hóa",
  subject: "Lý",
  gender: "Nam",
  ethic: "Kinh",
  joinDay: "07/04/1999",
  nationality: "Việt Nam",
  religion: "Công giáo",
  status: "Working",
  subjects: ["Toán", "Lý"],
  nickname: "Tristin Tran",
  contact: {
    address: "32 Hòa Bình, Bạc Liêu",
    email: "ts4blader@gmail.com",
    phoneNumber: "0706 863 720",
  },
  private: {
    civilId: "385 747 606",
    provideDay: "12/10/2020",
    providePlace: "Bac Lieu Police",
  },
  inGroup: {
    joinDay: "08/02/2012",
    joinPlace: "THCS Hòa Bình",
  },
  inParty: {
    joinDay: "06/12/2018",
    joinPlace: "THPT Cộng Hòa",
  },
  family: [
    {
      name: "Trần Minh Phương",
      address: "32 Hòa Bình, Bạc Liêu",
      phoneNumber: "0706 863 720",
    },
    {
      name: "Trần Minh Phương",
      address: "32 Hòa Bình, Bạc Liêu",
      phoneNumber: "0706 863 720",
    },
  ],
};
