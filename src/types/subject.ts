export type SubjectProps = {
  id: string;
  name: string;
  subjectTypeId: string;
  semesters: {
    semesterI: string;
    value: number;
  }[];
};
