import { StudentReport, RewardList, DisciplinedList } from "./archives";
import * as STUDENT_ARCHIVE from "./StudentArchive";
import * as STUDENT_INFO from "./StudentInfo";

export const TABS = [
  {
    text: "Thông tin chung",
    name: "student-info",
    panel: STUDENT_INFO.Panel,
    content: STUDENT_INFO.Content,
  },
  {
    text: "Quá trình học tập",
    name: "student-archive",
    panel: STUDENT_ARCHIVE.Panel,
    content: STUDENT_ARCHIVE.Content,
  },
];

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

export const ARCHIVES = [
  {
    name: "study-report",
    header: "Kết quả học tập",
    content: StudentReport,
  },
  {
    name: "reward-list",
    header: "Danh sách khen thưởng",
    content: RewardList,
  },
  {
    name: "disciplined-list",
    header: "Danh sách kỷ luật",
    content: DisciplinedList,
  },
];
