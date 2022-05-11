export const sortString = (current: string, next: string) => {
  return current.localeCompare(next);
};

export const sortNumber = (current: number, next: number) => {
  return current - next;
};
