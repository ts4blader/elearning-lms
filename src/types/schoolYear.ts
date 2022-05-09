export type SchoolYearProps = {
  id: string;
  beginYear: number;
  endYear: number;
  semesters: {
    id: string;
    name: string;
    beginDay: string;
    endDay: string;
  }[];
};
