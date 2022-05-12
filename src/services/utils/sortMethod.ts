import moment from "moment";

export const sortString = (current: string, next: string) => {
  return current.localeCompare(next);
};

export const sortNumber = (current: number = 0, next: number = 0) => {
  return current - next;
};

export const sortDate = (a: string, b: string) => {
  return moment(a).diff(moment(b));
};
