export type SemesterProps = {
  id: string;
  name: string;
  beginDay: string;
  endDay: string;
};

export type SchoolYearProps = {
  id: string;
  beginYear: number;
  endYear: number;
  semesters: SemesterProps[];
};
