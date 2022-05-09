import moment, { Moment } from "moment";

export type SchoolYearProps = {
  id: string;
  beginYear: number;
  endYear: number;
  semesters: {
    id: string;
    name: string;
    beginDay: Moment;
    endDay: Moment;
  }[];
};
