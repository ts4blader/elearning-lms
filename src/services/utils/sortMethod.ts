export const sortString = (current: string, next: string) => {
  return current.localeCompare(next);
};

export const sortNumber = (current: number = 0, next: number = 0) => {
  return current - next;
};
